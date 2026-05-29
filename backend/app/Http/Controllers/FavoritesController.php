<?php

namespace App\Http\Controllers;

use App\Models\Favorites;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $favorites = Favorites::with('product.category')
            ->where('user_id', $request->user()->id)
            ->latest()
            ->get();

        return response()->json([
            'message' => $favorites->isEmpty()
                ? 'No favorite product found'
                : 'Favorite products fetched successfully',

            'status' => 'success',

            'favorites' => $favorites,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|exists:products,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Failed to add product to favorites',
                'status' => 'failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $favorite = Favorites::firstOrCreate([
            'user_id' => $request->user()->id,
            'product_id' => $request->product_id,
        ]);

        return response()->json([
            'message' => $favorite->wasRecentlyCreated
                ? 'Product added to favorites'
                : 'Product is already in favorites',
            'status' => 'success',
            'favorite' => $favorite->load('product'),
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, Request $request)
    {
        $favorite = Favorites::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->first();

        if (!$favorite) {
            return response()->json([
                'message' => 'This product is not in your favorites',
                'status' => 'failed',
            ], 404);
        }

        return response()->json([
            'message' => 'Favorite fetched successfully',
            'status' => 'success',
            'favorite' => $favorite,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, Request $request)
    {
        $favorite = Favorites::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->first();

        if (!$favorite) {
            return response()->json([
                'message' => 'This product is not in your favorites',
                'status' => 'failed',
            ], 404);
        }

        $favorite->delete();

        return response()->json([
            'message' => 'Favorite removed successfully',
            'status' => 'success',
        ], 200);
    }
}
