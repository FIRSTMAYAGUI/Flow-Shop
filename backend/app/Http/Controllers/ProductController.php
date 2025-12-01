<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        if(empty($products)){
            return response()->json([
                'message' => 'No products found',
                'data' => $products
            ], 201);
        }

        return response()->json([
            'message' => 'products fetched',
            'data' => $products
        ], 200);
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
            'image_url' => 'nullable|image|mime:jpg,jpeg,png,avif|max:5450',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|mime:jpg,jpeg,png,avif|max:5450',
        ]);

        if($validatedProductData->fails()){
            return response()->json([
                'message' => 'failed to create product',
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

        /* 'name',
        'user_id',
        'category_id',
        'price',
        'in_stock',
        'quantity',
        'description',
        'image_url',
        'images', */

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

        $productData = Product::create([
            'name' => $request->name,
            'user_id' => $request->user_id,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'description' => $request->description,
            'image_url' => $image_url,
            'images' => $images,
        ]);

        return response()->json([
            'message' => 'Product created successfully',
            'data' => $productData,
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
