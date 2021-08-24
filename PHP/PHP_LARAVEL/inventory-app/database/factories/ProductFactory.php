<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this -> faker -> name(),
            'Cost' => random_int(900, 20000),
            'Price' => random_int(1000, 90000),
            'quantity' => random_int(1,100),
            'Brand_id'=> random_int(1,10),
            'Category_id'=> random_int(1,10),
        ];
    }
}
