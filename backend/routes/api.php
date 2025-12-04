<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(AuthController::class)->group(function (){
    Route::post('/register', 'register');
    Route::middleware('auth:sanctum')->group(function (){
        Route::post('/login', 'login');
        Route::post('/logout', 'logout');
    });
});


Route::apiResource('/products', ProductController::class);

Route::apiResource('/categories', CategoriesController::class);

Route::controller(FavoritesController::class)->group(function (){
    Route::post('/favorites', 'store');
    Route::get('/favorites/{userId}', 'index');
    Route::get('/favorites/{favoriteId}/{userId}', 'show');
    Route::delete('/favorites/{favoriteId}/{userId}', 'destroy');
});