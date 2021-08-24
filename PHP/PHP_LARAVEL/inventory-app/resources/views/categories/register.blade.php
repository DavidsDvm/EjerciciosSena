@extends('layout')
@section('title',$categories->id ? 'Editar Categorias' : 'Nuevo Categoria')
@section('encabezado',$categories->id ? 'Editar Categoria': 'Agregar Categoria')
@section('content')

<form action="{{ route('catSave') }}" method="POST" style="width: 100%; padding-top: 2%;"> {{-- --}}
    @csrf
    <input type="hidden" class="form-control" name="id" value="{{  old('id') ? old('id'):$categories->id}}">
    <div class="form-group p-2" >
      <label>Nombre de la categoria</label>
      <input type="text" name="Name" class="form-control" placeholder="Ingrese el nombre de la categoria" value="{{  old('Name') ? old('Name'):$categories->name}}" >
         @error('Name')
             <p class="text-danger">{{ $message }}</p>
         @enderror
        <input type="text" name="Name" class="form-control" placeholder="Ingrese la descripcion de la categoria" value="{{  old('Description') ? old('Description'):$categories->description}}" >
        @error('Name')
            <p class="text-danger">{{ $message }}</p>
        @enderror
    </div>


    <div class="form-group p-2">
        <button type="submit" class="btn btn-success">Guardar</button>
        <a href="{{ route('/categories')}}" class="btn btn-danger " >Cancelar</a>
    </div>
</form>
@endsection
