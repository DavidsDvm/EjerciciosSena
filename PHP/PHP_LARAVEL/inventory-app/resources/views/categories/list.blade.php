@extends('layout')
@section('title', 'Categorias')
@section('encabezado', 'Lista de Categorias')
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
            <th><a href="{{ route('catRegister')}}" class="btn btn-primary" style="float: right">Agregar Categoria</a></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($categoriesList as $category)
        <tr>
            <td>{{ $category->name}}</td>
            <td>{{ $category->description}}</td>
            <td>
                <a href="{{ route('catRegister',['id' => $category->id]) }}" class="btn btn-info">Editar</a>
                {{-- <a href="/categories/delete/{{ $category->id }}" class="btn btn-danger">Eliminar</a> --}}
                <a href="{{ route('catDelete',['id' => $category->id]) }}" class="btn btn-danger">Eliminar</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
