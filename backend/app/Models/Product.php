<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'user_id',
        'category_id',
        'price',
        'in_stock',
        'quantity',
        'description',
        'image_url',
        'images',
    ];

    protected $casts = [
        'images' => 'array'
    ];

    public function users(){
        return $this->belongsTo(User::class);
    }

    public function category(){
        return $this->belongsTo(Categories::class);
    }

    public function orderItems(){
        return $this->hasMany(OrderItem::class);
    }

    public function favorites(){
        return $this->hasMany(Favorites::class);
    }
}
