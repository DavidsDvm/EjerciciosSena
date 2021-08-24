@extends('layout')
@section('title', 'Productos')
@section('encabezado', 'Lista de Productos')
@section('content')

@if (session()->has('agregate'))
    <div class="alert alert-success">
        {{ session()->get('agregate') }}
    </div>
@endif

@if (session()->has('delete'))
    <div class="alert alert-danger">
        {{ session()->get('delete') }}
    </div>
@endif

    <table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Brand</th>
            <th><a href="{{ route('prodRegister')}}" class="btn btn-primary" style="float: right">Agregar Producto</a></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($productsList as $product)
        <tr>
            <td>{{ $product->Name}}</td>
            <td>{{ $product->Cost}}</td>
            <td>{{ $product->Price}}</td>
            <td>{{ $product->quantity}}</td>
            <td>{{ $product->Brand->name}}</td>
            <td>
                <a href="{{ route('prodRegister',['id' => $product->id]) }}" class="btn btn-info">Editar</a>
                {{-- <a href="/product/delete/{{ $product->id }}" class="btn btn-danger">Eliminar</a> --}}
                <a href="{{ route('prodDelete',['id' => $product->id]) }}" class="btn btn-danger">Eliminar</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
