<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validateUser = Validator::make($request->all(), [
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8'
        ]);

        if($validateUser->fails()){
            return response()->json([
                'message' => 'failed to create user',
                'status' => 'failed',
                'errors' => $validateUser->errors(),
            ], 422);
        }

        $user = User::create([
            'fullname' =>$request->fullname,
            'email' =>$request->email,
            'password' =>$request->password,
            'role' => 'user',
        ]);

        $token = $user->createToken('userToken')->plainTextToken;

        return response()->json([
            'message' => 'user created successfully',
            'status' => 'success',
            'data' => $user,
            'token' => $token,
        ]);
    }

    public function login(Request $request){
        $validateUser = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:8'
        ]);

        if($validateUser->fails()){
            return response()->json([
                'message' => 'failed to login user',
                'status' => 'failed',
                'errors' => $validateUser->errors(),
            ], 422);
        }

        if(Auth::attempt($validateUser)){
            $user = Auth::user();

            $token = $user->createToken('userToken')->plainTextToken;

            return response()->json([
                'message' => 'user login successfully',
                'status' => 'success',
                'data' => $user,
                'token' => $token,
            ], 200); 
        }

        return response()->json([
            'message' => 'Incorrect credentials',
            'status' => 'failed',
        ], 401);
    }

    public function logout (Request $request){

        $authUser = $request->user(); 

        if($authUser){
            $authUser->token()->revoke();

            return response()->json([
                'message' => 'User logged out',
                'status' => 'success'
            ], 200);
        }

        return response()->json([
            'message' => 'User not authenticated',
            'status' => 'failed',
        ], 401);
    }
}
