<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function update(Request $request, string $userId){

        $user = User::where('id', $userId)->first();

        if(!$user){
            return response()->json([
                'message' => 'user doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $validateUserInfo = Validator::make($request->all(), [
            'fullname' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email',
        ]);

        if($validateUserInfo->fails()){
            return response()->json([
                'message' => 'failed to update info',
                'status' => 'failed',
                'errors' => $validateUserInfo->errors(),
            ], 422);
        }

        $userData = $request->only([
            'fullname',
            'email'
        ]);

        $user->update($userData);

        return response()->json([
            'message' => 'User info updated successfully',
            'status' => 'success',
            'data' => $user,
        ], 200);
    }
}
