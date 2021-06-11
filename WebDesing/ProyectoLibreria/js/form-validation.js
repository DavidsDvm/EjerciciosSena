var arrHead = new Array();
var data0 = new Array();
var data1 = new Array();
var data2 = new Array();
var data3 = new Array();
var data4 = new Array();
var idNumberTable = 0;
arrHead = ['#', 'Producto', 'Precio con iva', 'porcentaje iva', 'cantidad', 'subtotal', 'valor iva', 'total', '<div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example"><button type="button" class="btn btn-success" id="addNewItem" onclick="addNewUsuer()">Agregar</button></div>']; // table headers.
data0 = ['Harry Potter Ultimate Edition', '1800000', '15', '1'];
data1 = ['El Alquimista', '10450', '19', '1'];
data2 = ['El Código da Vinci', '400000', '10', '3'];
data3 = ['Crepúsculo', '60000', '14', '5'];
data4 = ['Lo que el viento se llevó', '7900', '16', '2'];

// first create a TABLE structure by adding few headers.
function createTable() {
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');  // table id.
    empTable.setAttribute('class', 'table table-striped');

    var thead = empTable.createTHead();
    var tr = empTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th'); // the header object.
        th.setAttribute('scope', 'col');
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
        thead.appendChild(tr);
    }

    var div = document.getElementById('cont');
    div.appendChild(empTable);    // add table to a container.
}

 // function to add new row.
function addRow() {
  // call the table
  var empTab = document.getElementById('empTable');

  // call the input values
  var artBookName = document.getElementById('bookName').value;
  var priceTaxes = document.getElementById('priceWthTax').value;
  var taxPorcentaje = document.getElementById('taxesPorcentaje').value;
  var quantityBooks = document.getElementById('quantityBooks').value;

  // call tbody and count the rows
  var tbody = empTab.getElementsByTagName('tbody')[0];
  var rowCnt = empTab.rows.length;    // get the number of rows.
  var tr = empTab.insertRow(rowCnt); // table row.
  // tr = empTab.insertRow(rowCnt);
  empTab.appendChild(tbody);
  tbody.appendChild(tr);
  

  for (var c = 0; c < arrHead.length; c++) {
      var td = document.createElement('td');          // TABLE DEFINITION.
      var th = document.createElement('th');
      th.setAttribute('scope', 'row');

      //variables
      var totalValor = priceTaxes * quantityBooks;
      var subTotal = (totalValor) / (1 + (taxPorcentaje/100));
      var ivaValue = totalValor - subTotal;
            
      if (c == 0) {
        //adding to th
        tr.appendChild(th);

        //creating the number   
        th.innerHTML = (th.parentNode.rowIndex);
      }
      else if (c == 1) {
        //adding to td
        td = tr.insertCell(c);

        td.innerHTML = artBookName;
      }
      else if (c == 2) {
        //adding to td
        td = tr.insertCell(c);

        td.innerHTML = priceTaxes;
      }
      else if (c == 3) {
        //adding to td
        td = tr.insertCell(c);

        td.innerHTML = taxPorcentaje;
      }
      else if (c == 4) {
        //adding to td
        td = tr.insertCell(c);

        td.innerHTML = quantityBooks;
      }
      else if (c == 5) {
        //adding to td
        td = tr.insertCell(c);

        td.innerHTML = Math.ceil(subTotal);
      }
      else if (c == 6) {
        //adding to td
        td = tr.insertCell(c);

        td.innerHTML = Math.ceil(ivaValue);
      }
      else if (c == 7) {
        //adding to td
        td = tr.insertCell(c);

        td.innerHTML = totalValor;
      }
      else if (c == 8) {   // if its the first column of the table.
          //adding to td
          td = tr.insertCell(c);

          // add a button control.
          var divButtons = document.createElement('div');
          var editButton = document.createElement('button');
          var deleteButton = document.createElement('button');

          // set the attributes.
          divButtons.setAttribute('class', 'btn-group btn-group-sm');
          divButtons.setAttribute('role', 'group');
          divButtons.setAttribute('aria-label', 'Basic mixed styles example');
          editButton.setAttribute('type', 'button');
          editButton.setAttribute('class', 'btn btn-warning');
          deleteButton.setAttribute('type', 'button');
          deleteButton.setAttribute('class', 'btn btn-danger');

          //Edit content of the buttons
          editButton.innerHTML = "Editar"
          deleteButton.innerHTML = "x"

          // add button's "onclick" event.
          editButton.setAttribute('onclick', 'editRow(this)');
          deleteButton.setAttribute('onclick', 'removeRow(this)');

          td.appendChild(divButtons);
          divButtons.appendChild(editButton);
          divButtons.appendChild(deleteButton);
      }
  }
}

//Auto add data to the table
function autoAddData(){

  var names = document.getElementById('bookName');
  var prices = document.getElementById('priceWthTax');
  var taxesPorcentajes = document.getElementById('taxesPorcentaje');
  var quantity = document.getElementById('quantityBooks');

  for (var i = 0; i < 5; i++) {
    
    names.value = eval('data'+(i))[0];
    prices.value = eval('data'+(i))[1];
    taxesPorcentajes.value = eval('data'+(i))[2];
    quantity.value = eval('data'+(i))[3];

    addRow();

  }
}

// function to delete a row.
function removeRow(oButton) {
  var empTab = document.getElementById('empTable');
  empTab.deleteRow(oButton.parentNode.parentNode.parentNode.rowIndex); // buttton -> td -> tr
}

function editRow(oButton) {
  // Elements
  var empTab = document.getElementById('empTable');
  var FormInput = document.getElementById('formInput');

  // Data of the row
  var sourceEtiquet = (oButton.parentNode.parentNode.parentNode);
  var artBookName = sourceEtiquet.getElementsByTagName('td')[0].innerText;
  var priceTaxes = sourceEtiquet.getElementsByTagName('td')[1].innerText;
  var taxPorcentaje = sourceEtiquet.getElementsByTagName('td')[2].innerText;
  var quantityBooks = sourceEtiquet.getElementsByTagName('td')[3].innerText;

  // Data of the inputs
  var names = document.getElementById('bookName');
  var prices = document.getElementById('priceWthTax');
  var taxesPorcentajes = document.getElementById('taxesPorcentaje');
  var quantity = document.getElementById('quantityBooks');

  //change the values of the inputs
  console.log(artBookName);
  names.value = artBookName;
  prices.value = priceTaxes;
  taxesPorcentajes.value = taxPorcentaje;
  quantity.value = quantityBooks;

  addNewUsuer();
  
}

function addNewUsuer() {
  var FormInput = document.getElementById('formInput');
  var btnSubmit = document.getElementById('submitInputData');
  var btnCloseWindow = document.getElementById('closeWindowData');

  // document.getElementById('bookName').value = '';
  // document.getElementById('priceWthTax').value = '';
  // document.getElementById('taxesPorcentaje').value = '';
  // document.getElementById('quantityBooks').value = '';

  FormInput.style.display = 'block';

  closeWindowData.onclick = function () {
    FormInput.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == FormInput) {
      FormInput.style.display = "none";
    }
  }

}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          var FormInput = document.getElementById('formInput');
          FormInput.style.display = 'none';
          addRow();
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
