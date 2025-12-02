<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categories::latest()->get();

        if(empty($categories)){
            return response()->json([
                'message' => 'No categories found',
                'status' => 'success',
                'data' => $categories
            ], 200);
        }

        return response()->json([
            'message' => 'categories fetched successfully',
            'status' => 'success',
            'data' => $categories
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedCategoryData = Validator::make($request->all(), [
            'name' => 'required|max:255|string',
            'slug' => 'required|max:255|string|unique:categories,slug',
        ]);

        if($validatedCategoryData->fails()){
            return response()->json([
                'message' => 'failed to create category',
                'status' => 'failed',
                'errors' => $validatedCategoryData->errors()
            ], 422);
        }

        $slug = Str::slug($request->name, '-');

        $category = Categories::create([
            'name' => $request->name,
            'slug' => $request->$slug,
        ]); 

        return response()->json([
            'message' => 'category created successfully',
            'status' => 'success',
            'data' => $category
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $categoryId)
    {
        $category = Categories::find($categoryId);

        if(!$category){
            return response()->json([
                'message' => 'Category not found',
                'status' => 'failed',
            ], 404);
        }

        return response()->json([
            'message' => 'category fetched',
            'status' => 'success',
            'data' => $category
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $categoryId)
    {
        $category = Categories::find($categoryId);

        if(!$category){
            return response()->json([
                'message' => 'Category not found',
                'status' => 'failed',
            ], 404);
        }

        $validatedCategoryData = Validator::make($request->all(), [
            'name' => 'required|max:255|string',
            'slug' => 'required|max:255|string|unique:categories,slug',
        ]);

        if($validatedCategoryData->fails()){
            return response()->json([
                'message' => 'failed to create category',
                'status' => 'failed',
                'errors' => $validatedCategoryData->errors()
            ], 422);
        }

        $slug = Str::slug($request->name, '-');

        $category = Categories::update([
            'name' => $request->name,
            'slug' => $request->$slug,
        ]); 

        return response()->json([
            'message' => 'category updated successfully',
            'status' => 'success',
            'data' => $category
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $categoryId)
    {
        $category = Categories::find($categoryId);

        if(!$category){
            return response()->json([
                'message' => 'Category not found',
                'status' => 'failed',
            ], 404);
        }

        $category->delete();

        return response()->json([
            'message' => 'Category deleted'
        ], 200);
    }
}
