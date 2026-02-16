<?php

namespace App\Http\Controllers;

use App\Models\Favorites;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getUser(Request $request)
    {
        return response()->json([
            'status' => 'success',
            'data' => $request->user(),
        ], 200);
    }

    public function update(Request $request, string $userId)
    {

        $user = User::where('id', $userId)->first();

        if (!$user) {
            return response()->json([
                'message' => 'user doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $validateUserInfo = Validator::make($request->all(), [
            'fullname' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email',
        ]);

        if ($validateUserInfo->fails()) {
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

    public function changePassword(Request $request, string $userId)
    {

        $user = User::where('id', $userId)->first();

        if (!$user) {
            return response()->json([
                'message' => 'user doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $validateUserPwd = Validator::make($request->all(), [
            'current_password' => 'required|string|min:8|max:255',
            'new_password' => 'required|string|min:8|max:255|confirmed',
        ]);

        if ($validateUserPwd->fails()) {
            return response()->json([
                'message' => 'Failed to change password',
                'status' => 'failed',
                'errors' => $validateUserPwd->errors(),
            ], 422);
        }

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'message' => 'The current password is incorrect',
                'status' => 'failed',
            ], 422);
        }

        $user->update([
            'password' => $request->new_password
        ]);

        return response()->json([
            'message' => 'Password changed successfully',
            'status' => 'success'
        ]);
    }

    public function deleteUser(Request $request, string $userId)
    {
        $user = User::where('id', $userId)->first();

        if (!$user) {
            return response()->json([
                'message' => 'User doesn\'t exist',
                'status' => 'failed',
            ], 404);
        }

        $validateUserPwd = Validator::make($request->all(), [
            'password' => 'required|string|min:8|max:255',
        ]);

        if ($validateUserPwd->fails()) {
            return response()->json([
                'message' => 'Failed to delete user',
                'status' => 'failed',
                'errors' => $validateUserPwd->errors(),
            ], 422);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Password is incorrect',
                'status' => 'failed',
            ], 403);
        }

        DB::beginTransaction();

        try {
            //delete all favorite product of the user
            Favorites::where('user_id', $user->id)->delete();

            $userOrders = Orders::where('user_id', $user->id)->get();

            if ($userOrders->isNotEmpty()) {

                //delete all orders made by the user
                OrderItem::whereIn('order_id', $userOrders->pluck('id'))->delete();

                //delete all order items of that the user ordered
                Orders::whereIn('id', $userOrders->pluck('id'))->delete();
            }

            //delete all products created by user
            Product::where('user_id', $user->id)->delete();

            //revoke all the user's token
            $user->tokens()->delete();

            $user->delete();

            DB::commit();

            return response()->json([
                'message' => 'Account deleted successfully',
                'status' => 'success',
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'message' => 'Server error during account deletion',
                'status' => 'failed',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
