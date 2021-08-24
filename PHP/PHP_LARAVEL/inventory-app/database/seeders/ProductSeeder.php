<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
Use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory(30)->create();
    }
}
