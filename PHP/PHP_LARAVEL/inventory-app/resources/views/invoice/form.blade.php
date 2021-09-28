@extends('layout')
@section('title', 'Nueva factura')
@section('encabezado', 'Nueva factura')

@section('content')

<form action="" method="post" id="invoiceForm">
    @csrf
    <div class="row">
        <div class="col-sm-3"><b>Producto</b></div>
        <div class="col-sm-3"><b>Cantidad</b></div>
        <div class="col-sm-3"><b>Precio</b></div>
        <div class="col-sm-3"><b>Total Productos</b></div>
    </div>
    <div class="row content">
        <div class="col-sm-3">
            <select name="product[]" id="product1" class="form-select product" data-row="1">
                <option value="">Seleccione un producto</option>
                @foreach ($products as $product)
                    <option value="{{ $product->id }}"> {{ $product->Name }} </option>
                @endforeach
            </select>
        </div>
        <div class="col-sm-3">
            <input type="number" min="1" value="1" name="quantity[]" class="form-control quantity" id="quantity1">
        </div>
        <div class="col-sm-3">
            <input type="number" name="price[]" class="form-control price" id="price1">
        </div>
        <div class="col-sm-3">
            <input type="text" readonly class="form-control-plaintext totalProduct" id="totalProduct1">
        </div>
    </div>
</form>

<button type="button" class="btn btn-primary" id="add"> anadir </button>

@endsection

@section('script')
    <script>
        const products = @json($products);
        var contador = 1;
        let productList = document.querySelector('.product');
        let priceElement = document.querySelector('.price');
        const quantityElement = document.querySelector('.quantity');

        function init(){
            contador = 1;
            arrProductList = document.querySelectorAll('.product')

            arrProductList.forEach(ProductList => {
                let priceElement = document.querySelector('#price'+contador);
                ProductList.addEventListener('change', (event) => {
                    productId = event.target.value
                    productSelected = products.filter( product => product.id == productId)
                    priceElement.value = productSelected[0].Cost
                                        
                    totalProduct();
                });
                contador++;
            })
        }
        init()
                
        function totalProduct(){           
            totalElement = document.querySelector('.totalProduct')
            totalElement.value = quantityElement.value * priceElement.value
        }

        priceElement.addEventListener('input', (event) => {
            totalProduct();
        })

        quantityElement.addEventListener('input', (event) => {
            totalProduct();
        })

        const addButton = document.getElementById('add');
        addButton.addEventListener('click', (event)=>{
            fila = document.createElement('div');
            fila.className = 'row';
            fila.innerHTML = 
                            `<div class="col-sm-3">
                                <select name="product[]" id="product${contador}" class="form-select product">
                                    <option value="">Seleccione un producto</option>
                                    @foreach ($products as $product)
                                        <option value="{{ $product->id }}"> {{ $product->Name }} </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <input type="number" min="1" value="1" name="quantity[]" class="form-control quantity" id="quantity${contador}">
                            </div>
                            <div class="col-sm-3">
                                <input type="number" name="price[]" class="form-control price" id="price${contador}">
                            </div>
                            <div class="col-sm-3">
                                <input type="text" readonly class="form-control-plaintext totalProduct" id="totalProducto${contador}">
                            </div>`

            form = document.getElementById('invoiceForm');
            form.appendChild(fila)
            init()
        })

    </script>
@endsection