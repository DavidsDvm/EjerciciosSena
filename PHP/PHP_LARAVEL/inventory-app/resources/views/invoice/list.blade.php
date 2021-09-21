@extends('layout')

@section('title', 'Invoices')
@section('encabezado', 'Invoices')

@section('content')
<a class="btn btn-primary align-right" href="{{ route('invoice.form') }}">Nueva Factura</a>
<table class="table table-striped table-hover">
    <thead>
        <th>ID</th>
        <th>Subtotal</th>
        <th>Total</th>
        <th>Fecha</th>
        <th></th>
    </thead>
    <tbody>
        @foreach ($invoices as $invoice)
        <tr>
            <td>{{ $invoice->id }}</td>
            <td>${{ number_format($invoice->subtotal, 0,",",".") }}</td>
            <td>${{ number_format($invoice->total, 0,",",".") }}</td>
            <td>{{ $invoice->created_at }}</td>
            <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal{{ $invoice->id }}">Detalle</button>
            </td>
        </tr>
        <div class="modal fade" id="modal{{ $invoice->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Invoice # {{ $invoice->id }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3">Producto</div>
                            <div class="col-sm-3">Cantidad</div>
                            <div class="col-sm-3">Precio</div>
                            <div class="col-sm-3">Total Producto</div>
                        </div>
                        @foreach ($invoice->products as $product)
                        <div class="row">
                            <div class="col-sm-3">{{ $product->name }}</div>
                            <div class="col-sm-3">{{ $product->pivot->quantity }}</div>
                            <div class="col-sm-3">{{ number_format($product->pivot->price, 0,",",".") }}</div>
                            <div class="col-sm-3">{{ number_format($product->pivot->quantity * $product->pivot->price, 0,",",".") }}</div>
                        </div><br><br>
                        @endforeach
                        <div class="row">
                            <hr>
                            <div class="col-sm-6"></div>
                            <div class="col-sm-3">Subtotal:</div>
                            <div class="col-sm-3">{{ number_format($invoice->subtotal, 0,",",".") }}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6"></div>
                            <div class="col-sm-3">IVA:</div>
                            <div class="col-sm-3">{{ number_format($invoice->total-$invoice->subtotal, 0,",",".") }}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6"></div>
                            <div class="col-sm-3">Total:</div>
                            <div class="col-sm-3">{{ number_format($invoice->total, 0,",",".") }}</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>    
            </div>
        </div>


        @endforeach
    </tbody>
</table>
@endsection