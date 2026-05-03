<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Product::with('category');

        // SEARCH
        if ($request->filled('search')) {
            $search = $request->search;

            $query->where('name', 'like', "%{$search}%")
                ->orWhere('description', 'like', "%{$search}%");
        }

        // PAGINATION
        $products = $query->paginate(4);

        return response()->json([
            'message' => 'products fetched',
            'status' => 'success',
            'products' => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedProductData = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'user_id' => 'required|exists:users,id',
            'category_id' => 'required|exists:categories,id',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|min:1',
            'description' => 'required|string',
            'image_url' => 'nullable|image|mimes:jpg,jpeg,png,avif|max:5450',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png,avif|max:5450',
        ]);

        if($validatedProductData->fails()){
            return response()->json([
                'message' => 'failed to create product',
                'status' => 'failed',
                'errors' => $validatedProductData->errors(),
            ], 422);
        }

        $image_url = null;
        $images = [];

        if($request->hasFile('image_url')){
            $image_url = $request->file('image_url')->store('products', 'public');
        }

        if($request->hasFile('images')){
            foreach ($request->file('images') as $img) {
                $images[] = $img->store('products/images', 'public');
            }
        }

        $product = [
            'name' => $request->name,
            'user_id' => $request->user_id,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'description' => $request->description,
            'image_url' => $image_url,
            'images' => $images,
        ];

        $productData = Product::create($product);

        return response()->json([
            'message' => 'Product created successfully',
            'status' => 'success',
            'products' => $productData,
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $productId)
    {
        $product = Product::with('category')->find($productId);

        if (!$product) {
            return response()->json([
                'message' => 'Product not found',
                'status' => 'failed',
            ], 404);
        }

        // Similar products (same category, exclude current product)
        $similarProducts = Product::with('category')
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->latest()
            ->take(4)
            ->get();

        return response()->json([
            'message' => 'Product fetched successfully',
            'status' => 'success',
            'product' => $product,
            'similar_products' => $similarProducts
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $productId)
    {
        $product = Product::find($productId);

        if (!$product) {
            return response()->json([
                "message" => "Product not found",
                'status' => 'failed',
            ], 404);
        }

        $validatedProductData = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'user_id' => 'sometimes|required|exists:users,id',
            'category_id' => 'sometimes|required|exists:categories,id',
            'price' => 'sometimes|required|numeric|min:0',
            'quantity' => 'sometimes|required|min:1',
            'description' => 'sometimes|required|string',
            'image_url' => 'nullable|image|mimes:jpg,jpeg,png,avif|max:5450',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png,avif|max:5450',
        ]);

        if($validatedProductData->fails()){
            return response()->json([
                'message' => 'failed to update product',
                'status' => 'failed',
                'errors' => $validatedProductData->errors(),
            ], 422);
        }

        $image_url = $product->image_url;
        $images = $product->images ?? [];

        if($request->hasFile('image_url') && $image_url){
            Storage::disk('public')->delete($image_url);
            $image_url = $request->file('image_url')->store('products', 'public');
        }

        if($request->hasFile('images')){
            foreach($request->file('images') as $img){
                $images[] = $img->store('products/images', 'public');
            }
        }

        $productData = $request->only([
            'name' ,
            'user_id' ,
            'category_id' ,
            'price' ,
            'quantity' ,
            'description',
        ]);

        $productData['image_url'] = $image_url;
        $productData['images'] = $images;

        $product->update($productData);

        return response()->json([
            'message' => 'Product updated successfully',
            'status' => 'success',
            'product' => $product
        ], 200);

        /* try {
            
        } catch (\Exception $e) {
            // Log error for debugging
            Log::error('Product update error: '.$e->getMessage(), [
                'stack' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'message' => 'Server Error. Please try again later.',
                'status' => 'error',
            ], 500);
        } */
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $productId)
    {
        $product = Product::find($productId);
        if(!$product){
            return response()->json([
                'message' => 'Product not found',
                'status' => 'failed',
            ], 404);
        }

        $image_url = $product->image_url;
        if($image_url){
            Storage::disk('public')->delete($image_url);
        }

        $product->delete();

        return response()->json([
            'message' => 'Product deleted',
            'status' => 'success',
        ], 200);
    }
}
