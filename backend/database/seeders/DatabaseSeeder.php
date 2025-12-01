<?php

namespace Database\Seeders;

use App\Models\Categories;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        // 'fullname',
        // 'email',
        // 'password',
        // 'role'

        // User::create([
        //     'fullname' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password' => Hash::make('something'),
        //     'role' => 'vendor',
        // ]);

        // Categories::create([
        //     'name' => 'fashion',
        //     'slug' => 'fashion',
        // ]);

        $this->call([
            // Categories::class,
            ProductSeeder::class
        ]);
    }
}
