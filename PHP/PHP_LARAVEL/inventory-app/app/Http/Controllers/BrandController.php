<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;
use GuzzleHttp\Psr7\Message;

class BrandController extends Controller
{
    // Listar Productos
    function show(){
        $brandList = Brand::all();
        // return dd($productList);
        return view('brand/list',['brandsList'=>$brandList]);
    }

    function delete($id){
        $marca = Brand::findOrFail($id);
        $marca -> delete();
        return redirect('/brands')->with('delete', 'Marca Eliminada');
    }

    function form($id = null){
        if (!$id){
            $brand = new Brand();
        }else{
            $brand = Brand::findOrFail($id);
        }
        return view('brand/register',['brand' => $brand]);
    }

    function register(Request $request){
        $brand = new Brand();

        if ($request->id > 0){
            $brand = Brand::findOrFail($request->id);
        }
        $request->validate([
            'Name' => 'required|max:50'
        ]);
        $brand -> name = $request ->Name;
        $brand ->save();
        return redirect('/brands')->with('agregate', 'Marca Agregada');
    }
}
