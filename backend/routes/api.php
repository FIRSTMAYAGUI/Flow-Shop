<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(AuthController::class)->group(function (){
    Route::post('/register', 'register');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout')->middleware('auth:sanctum');
});

Route::middleware('auth:sanctum')->prefix('users')->controller(UserController::class)->group(function (){
    Route::put('/{userId}', 'update');
    Route::post('/{userId}', 'changePassword')->whereNumber('userId');
    Route::delete('/{userId}', 'deleteUser');
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{productId}', [ProductController::class, 'show']);
Route::middleware('auth:sanctum')->controller(ProductController::class)->group(function (){
    Route::post('/products', 'store');
    Route::put('/products/{productId}', 'update');
    Route::delete('/products/{productId}', 'destroy');
});

Route::get('/categories', [CategoriesController::class, 'index']);
Route::middleware('auth:sanctum')->controller(CategoriesController::class)->group(function (){
    Route::post('/categories', 'store');
    Route::get('/categories/{categoryId}', 'show');
    Route::put('/categories/{categoryId}', 'update');
    Route::delete('/categories/{categoryId}', 'destroy');
});

Route::middleware('auth:sanctum')->controller(FavoritesController::class)->group(function (){
    Route::post('/favorites', 'store');
    Route::get('/favorites/{userId}', 'index');
    Route::get('/favorites/{favoriteId}/{userId}', 'show');
    Route::delete('/favorites/{favoriteId}/{userId}', 'destroy');
});

Route::middleware('auth:sanctum')->prefix('users/orders')->controller(OrdersController::class)->group(function (){
    Route::post('/', 'store');
    Route::get('/{userId}', 'index');
    Route::get('/{userId}/{orderId}', 'show');
    Route::delete('/{userId}/{orderId}', 'destroy');
});