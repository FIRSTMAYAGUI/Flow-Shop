<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable = [
        'user_id',
        'total_amount',
        'status',
        'delivery_address',
        'payment_status',
        'payment_method',
    ];

    protected $casts = [
        ''
    ];

    public function users(){
        return $this->belongsTo(User::class);
    }

    public function orderItem(){
        return $this->hasMany(OrderItem::class, 'order_id');
    }
}
