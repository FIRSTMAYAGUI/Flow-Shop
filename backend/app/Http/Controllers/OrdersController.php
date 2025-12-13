<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $userId)
    {
        $user = User::find($userId);

        if(!$user){
            return response()->json([
                'message' => 'User doesn\'t exists',
                'status' => 'failed',
            ], 404);
        }

        $orders = Orders::where('user_id', $userId)->get();

        if($orders->isEmpty()){
            return response()->json([
                'message' => 'No orders found',
                'status' => 'success',
            ], 200);
        }

        return response()->json([
            'message' => 'Orders fetched successfully',
            'status' => 'success',
            'orders' => $orders->load('orderItem.product'),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateOrder = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'delivery_address' => 'required|string',
            'total_amount' => 'required|numeric',
            'payment_method' => 'required|in:cash_on_delivery,paypal,stripe,orange_money,mobile_money',
            'products' => 'required|array',
            'products.*.product_id' => 'required|exists:products,id',
            'products.*.quantity' => 'required|integer|min:1',
        ]);

        if($validateOrder->fails()){
            return response()->json([
                'message' => 'Failed to place order',
                'status' => 'failed',
                'error' => $validateOrder->errors(),
            ], 422);
        }

        DB::beginTransaction();

        try{
            $totalAmount = 0;

            foreach ($request->products as $p) {
                $product = Product::find($p['product_id']);

                if(!$product){
                    throw new \Exception('Product not found');
                }

                $orderedQty = $p['quantity'] ;
                $availableProductQty = $product->quantity;
                //dd($availableProductQty);

                if($availableProductQty < $orderedQty){
                    throw new \Exception('The product "'.$product->name.'" of ID "'.$product->id.'" is out of stock');
                }

                $product->decrement('quantity', $orderedQty);

                $product->refresh();

                $currentQty = $product->quantity;

                //$product->get('quantity');
                //dd($currentQty);

                if($currentQty <= 5 || $currentQty = 0){
                    $product->update([
                        'in_stock' => false
                    ]);
                }

                $unit_price = $product->price;

                $totalAmount += $orderedQty * $unit_price;
            }

            $order = Orders::create([
                'user_id' => $request->user_id,
                'delivery_address' => $request->delivery_address,
                'total_amount' => $totalAmount,
                'payment_method' => $request->payment_method,
            ]);

            $orderItems = [];

            foreach ($request->products as $p) {
                $product = Product::find($p['product_id']);
                $orderItems [] = $order->orderItem()->create([
                    'product_id' => $p['product_id'],
                    'quantity' => $p['quantity'],
                    'unit_price' => $product->price,
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Order placed successfully',
                'status' => 'success',
                'order' => $order->load('orderItem.product'),
            ]);

        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                'message' => 'Server error during order placement',
                'status' => 'failed',
                'error' => $e->getMessage(),
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $userId, string $orderId)
    {
        $user = User::find($userId);

        if(!$user){
            return response()->json([
                'message' => 'User doesn\'t exists',
                'status' => 'failed',
            ], 404);
        }

        $order = Orders::find($orderId);

        if(!$order){
            return response()->json([
                'message' => 'Order doesn\'t exists',
                'status' => 'failed',
            ], 404);
        }

        $userOrder = Orders::where('user_id', $userId)->where('id', $orderId)->get();

        //dd($userOrder);
        if($userOrder->isEmpty()){
            return response()->json([
                'message' => 'Order doesn\'t belong to user',
                'status' => 'failed',
            ], 403);
        }

        return response()->json([
            'message' => 'Order fetched successfully',
            'status' => 'success',
            'order' => $userOrder->load('orderItem.product')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $userId, string $orderId)
    {
        $user = User::find($userId);

        if(!$user){
            return response()->json([
                'message' => 'User doesn\'t exists',
                'status' => 'failed',
            ], 404);
        }

        $order = Orders::where('user_id', $userId)->where('id', $orderId)->first();

        if(!$order){
            return response()->json([
                'message' => 'Order doesn\'t exists or doesn\'t belong to user',
                'status' => 'failed',
            ], 404);
        }

        DB::beginTransaction();
        
        try {

            OrderItem::where('order_id', $orderId)->delete();

            $order->delete();

            DB::commit();

            return response()->json([
                'message' => 'Order cancelled',
                'status' => 'success',
            ]);

        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                'message' => 'Server error during order cancellation',
                'status' => 'failed',
                'error' => $e->getMessage(),
            ], 500);
        }

    }
}
