<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('Name',50);
            $table->double('Cost',10,2);
            $table->double('Price',10,2);
            $table->integer('quantity');
            $table->foreignId('Brand_id',50);
            $table->foreignId('Category_id',50);
            $table->timestamps();

            $table->foreign('Brand_id')->references('id')->on('brands');
            $table->foreign('Category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
