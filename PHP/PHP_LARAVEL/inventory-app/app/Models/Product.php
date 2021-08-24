<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    // protected $table = 'product';

    function brand(){
        return $this -> belongsTo(Brand::class,'Brand_id');
    }

    function categories(){
        return $this -> belongsTo(Categories::class,'Category_id');
    }
}
