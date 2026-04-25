<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\LoginSuccessMail;
use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
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
                'message' => 'Signup failed, check if all inputs are correct',
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

        //Mail::to($user)->send(new WelcomeMail($user));

        return response()->json([
            'message' => 'User created successfully, a message was sent to your email',
            'status' => 'success',
            'user' => $user,
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
                'message' => 'login failed check your crendentials',
                'status' => 'failed',
                'errors' => $validateUser->errors(),
            ], 422);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Incorrect credentials'
            ], 401);
        }

        $user = Auth::user();

        $token = $user->createToken('userToken')->plainTextToken; //This works just ignore the error message check how to fix it later

        //Mail::to($user)->send(new LoginSuccessMail($user));

        return response()->json([
            'message' => 'User login successfully',
            'status' => 'success',
            'user' => $user,
            'token' => $token,
        ], 200); 
    }

    public function logout (Request $request){

        $user = $request->user();

        if(!$user){
            return response()->json([
                'message' => 'User not authenticated',
                'status' => 'failed',
            ], 401);
        }

        $user->currentAccessToken()->delete();

        return response()->json([
            'message' => 'User logged out',
            'status' => 'success',
        ], 200);
    }
}
