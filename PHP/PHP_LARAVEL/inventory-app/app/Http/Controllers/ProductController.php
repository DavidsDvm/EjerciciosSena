<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;
use GuzzleHttp\Psr7\Message;

class ProductController extends Controller
{
    // Listar Productos
    function show(){
        $productList = Product::has('brand')->get();
        // return dd($productList);
        return view('product/list',['productsList'=>$productList]);
    }

    function delete($id){
        $producto = Product :: findOrFail($id);
        $producto -> delete();
        return redirect('/products')->with('delete', 'Producto Eliminado');
    }

    function form($id = null){
        if (!$id){
            $product = new Product();
        }else{
            $product = Product::findOrFail($id);
        }

        $brands = Brand::all();
        return view('product/register',['product' => $product, 'brands' => $brands]);
    }

    function register(Request $request){
        $product = new Product();

        if ($request->id > 0){
            $product = Product::findOrFail($request->id);
        }
        $request->validate([
            'Name' => 'required|max:50',
            'Cost' => 'required',
            'Price' => 'required',
            'Quantity' => 'required|numeric',
            'Brand' => 'required'
        ]);
        $product -> name = $request ->Name;
        $product -> cost = $request ->Cost;
        $product -> price = $request ->Price;
        $product -> quantity = $request ->Quantity;
        $product -> Brand_id = $request ->Brand;
        $product ->save();
        return redirect('/products')->with('agregate', 'Producto Agregado');
    }
}
