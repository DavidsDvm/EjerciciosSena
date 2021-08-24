<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
use GuzzleHttp\Psr7\Message;

class CategoriesController extends Controller
{
    // Listar Productos
    function show(){
        $categoriesList = Categories::all();
        // return dd($productList);
        return view('categories/list',['categoriesList'=>$categoriesList]);
    }

    function delete($id){
        $marca = Categories::findOrFail($id);
        $marca -> delete();
        return redirect('/categories')->with('delete', 'Categoria Eliminada');
    }

    function form($id = null){
        if (!$id){
            $categories = new Categories();
        }else{
            $categories = Categories::findOrFail($id);
        }
        return view('categories/register',['categories' => $categories]);
    }

    function register(Request $request){
        $categories = new Categories();

        if ($request->id > 0){
            $categories = Categories::findOrFail($request->id);
        }
        $request->validate([
            'Name' => 'required|max:50'
        ]);
        $categories -> name = $request ->Name;
        $categories ->save();
        return redirect('/categories')->with('agregate', 'categoria Agregada');
    }
}
