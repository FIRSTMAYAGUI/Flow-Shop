<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //'name',
        //'slug'

        Categories::create([
            'name' => 'fashion',
            'slug' => 'fashion',
        ]);
    }
}
