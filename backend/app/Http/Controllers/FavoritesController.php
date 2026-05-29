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
        $validatedfavorite = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
        ]);

        if($validatedfavorite->fails()){
            return response()->json([
                'message' => 'failed to add to favorites',
                'status' => 'failed',
                'errors' => $validatedfavorite->errors(),
            ], 422);
        }

        $favorite = Favorites::create([
            'user_id' => $request->user_id,
            'product_id' => $request->product_id,
        ]);

        //$favorite->load('product');

        return response()->json([
            'message' => 'product added to favorites',
            'status' => 'success',
            'data' => $favorite//->pluck('product'),
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $favoriteId, string $userId)
    {
        $user = User::find($userId);

        if(!$user){
            return response()->json([
                'message' => 'User doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $favorite = Favorites::find($favoriteId);

        if(!$favorite){
            return response()->json([
                'message' => 'Favorite doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $favorite = Favorites::where('id', $favoriteId)->where('user_id', $userId)->get();

        //dd($favorites);

        if ($favorite->isEmpty()) {
            return response()->json([
                'message' => 'No favorite product found',
                'status' => 'success',
            ], 200);
        }

        //$productIds = $favorites->pluck('product_id'); 

        //$favProducts = Product::whereIn('id', $productIds)->latest()->get();

        $favProducts = $favorite->load('product');

        return response()->json([
            'message' => 'Favorite product fetched successfully',
            'status' => 'success',
            'data' => $favProducts->pluck('product'),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $favoriteId, string $userId)
    {
        $user = User::find($userId);

        if(!$user){
            return response()->json([
                'message' => 'User doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $favorite = Favorites::find($favoriteId);

        if(!$favorite){
            return response()->json([
                'message' => 'Favorite doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $userFav = Favorites::where('user_id', $userId)->get();

        if($userFav->isEmpty()){
            return response()->json([
                'message' => 'Favorite doesn\'t belong to user',
                'status' => 'failed',
            ], 403);
        }

        $favorite->delete();

        return response()->json([
            'message' => 'Removed from favorites',
            'status' => 'success',
        ], 200);
    }
}
