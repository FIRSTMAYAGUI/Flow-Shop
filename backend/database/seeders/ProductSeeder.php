<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 'name',
        // 'user_id',
        // 'category_id',
        // 'price',
        // 'in_stock',
        // 'quantity',
        // 'description',
        // 'image_url',
        // 'images',

        Product::create([
            'name' => 'shoes',
            'user_id' => 1,
            'category_id' => 1,
            'price' => 8500,
            'quantity' => 10,
            'description' => 'New arrival of a Nike shoe',
        ]);
    }
}
