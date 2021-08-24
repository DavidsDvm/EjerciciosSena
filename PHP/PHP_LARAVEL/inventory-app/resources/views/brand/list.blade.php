@extends('layout')
@section('title', 'Marcas')
@section('encabezado', 'Lista de Marcas')
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
            <th><a href="{{ route('braRegister')}}" class="btn btn-primary" style="float: right">Agregar Marca</a></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($brandsList as $brand)
        <tr>
            <td>{{ $brand->name}}</td>
            <td>
                <a href="{{ route('braRegister',['id' => $brand->id]) }}" class="btn btn-info">Editar</a>
                {{-- <a href="/brand/delete/{{ $brand->id }}" class="btn btn-danger">Eliminar</a> --}}
                <a href="{{ route('braDelete',['id' => $brand->id]) }}" class="btn btn-danger">Eliminar</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
