@extends('layout')
@section('title',$brand->id ? 'Editar Marca' : 'Nuevo Marca')
@section('encabezado',$brand->id ? 'Editar marca': 'Agregar marca')
@section('content')

<form action="{{ route('BrandSave') }}" method="POST" style="width: 100%; padding-top: 2%;"> {{-- --}}
    @csrf
    <input type="hidden" class="form-control" name="id" value="{{  old('id') ? old('id'):$brand->id}}">
    <div class="form-group p-2" >
      <label>Nombre marca</label>
      <input type="text" name="Name" class="form-control" placeholder="Ingrese el nombre del marca" value="{{  old('Name') ? old('Name'):$brand->name}}" >
         @error('Name')
             <p class="text-danger">{{ $message }}</p>
         @enderror
    </div>


    <div class="form-group p-2">
        <button type="submit" class="btn btn-success">Guardar</button>
        <a href="{{ route('/brands')}}" class="btn btn-danger " >Cancelar</a>
    </div>
</form>
@endsection
