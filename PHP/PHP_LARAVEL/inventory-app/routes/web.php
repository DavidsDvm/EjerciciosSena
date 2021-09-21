<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoriesController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\InvoiceController;

Route::get('/', function () {
    return view('welcome');
})->middleware('auth');
//Product
Route::get('/products', [ProductController::class, 'show'])->name('/products')->middleware('auth');
Route::get('/product/delete/{id}', [ProductController::class, 'delete'])->name('prodDelete');
Route::get('/product/Register/{id?}', [ProductController::class, 'form'])->name('prodRegister');
Route::post('/product/Save', [ProductController::class, 'register'])->name('ProductSave');

//Brand
Route::get('/brands', [BrandController::class, 'show'])->name('/brands')->middleware('auth');
Route::get('/brand/delete/{id}', [BrandController::class, 'delete'])->name('braDelete');
Route::get('/brand/Register/{id?}', [BrandController::class, 'form'])->name('braRegister');
Route::post('/brand/Save', [BrandController::class, 'register'])->name('BrandSave');

//Categories
Route::get('/categories', [CategoriesController::class, 'show'])->name('/categories')->middleware('auth');
Route::get('/categories/delete/{id}', [CategoriesController::class, 'delete'])->name('catDelete');
Route::get('/categories/Register/{id?}', [CategoriesController::class, 'form'])->name('catRegister');
Route::post('/categories/Save', [CategoriesController::class, 'register'])->name('catSave');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/invoices', [InvoiceController::class, 'show']);
Route::get('/invoice/form',[InvoiceController::class, 'form'])->name('invoice.form');