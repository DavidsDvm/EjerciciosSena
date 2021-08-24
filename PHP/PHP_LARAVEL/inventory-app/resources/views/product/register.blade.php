@extends('layout')
@section('title',$product->id ? 'Editar Producto' : 'Nuevo Producto')
@section('encabezado',$product->id ? 'Editar Producto': 'Agregar Producto')
@section('content')

<form action="{{ route('ProductSave') }}" method="POST" style="width: 100%; padding-top: 2%;"> {{-- --}}
    @csrf
    <input type="hidden" class="form-control" name="id" value="{{  old('id') ? old('id'):$product->id}}">
    <div class="form-group p-2" >
      <label>Nombre producto</label>
      <input type="text" name="Name" class="form-control" placeholder="Ingrese el nombre del producto" value="{{  old('Name') ? old('Name'):$product->Name}}" >
         @error('Name')
             <p class="text-danger">{{ $message }}</p>
         @enderror
    </div>

    <div class="form-group p-2">
      <label >Costo</label>
      <input type="text" class="form-control" name="Cost" placeholder="El costo al cual se compro el producto" value="{{ old('Cost')  ? old('Cost'):$product->Cost}}">
        @error('Cost')
            <p class="text-danger">{{ $message }}</p>
        @enderror
    </div>

    <div class="form-group p-2">
        <label >Precio</label>
        <input type="text" class="form-control" name="Price" placeholder="Precio de venta del producto" value="{{ old('Price')  ? old('Price'):$product->Price}}">
        @error('Price')
            <p class="text-danger">{{ $message }}</p>
        @enderror
    </div>

    <div class="form-group p-2">
        <label >Cantidad</label>
        <input type="text" class="form-control" name="Quantity" placeholder="Cantidad a agregar del producto" value="{{ old('Quantity')  ? old('Quantity'):$product->quantity}}">
        @error('Quantity')
            <p class="text-danger">{{ $message }}</p>
        @enderror
    </div>

    <div class="form-group p-2">
        <label >Marca</label>
        <select name="Brand" class="form-control">
            @foreach ($brands as $brand)
                    <option value="{{ $brand->id }}" {{ $product->brand_id === $brand->id ? 'selected' : '' }}>
                        {{ $brand->name }}
                    </option>
            @endforeach
        </select>

        @error('Brand')
            <p class="text-danger">{{ $message }}</p>
         @enderror
    </div>
    <div class="form-group p-2">
        <button type="submit" class="btn btn-success">Guardar</button>
        <a href="{{ route('/products')}}" class="btn btn-danger " >Cancelar</a>
    </div>
</form>
@endsection
