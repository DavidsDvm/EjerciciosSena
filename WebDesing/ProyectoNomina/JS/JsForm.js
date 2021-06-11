var arrHead = new Array();
var data0 = new Array();
var data1 = new Array();
var data2 = new Array();
var data3 = new Array();
var data4 = new Array();
var idNumberTable = 0;
arrHead = ['#', 'Cedula', 'Nombre', 'Sueldo Mensual', 'Dias', 'Basico', 'Aux_trans', 'Hora ordinaria','HEN 1.75',
'HEDD 2','HeDN 2.5','REC_NOC 0,35','REC_NOC 0,35', 'Total extras','TOTAL DeVENGADO','Salud empleado', 'Pension empleado', 'Fondo sol', 'UVT', 'Rete fuente', 'Rete pesos', 'Total deducido', 'Saludo pat',
'Pension pat', 'Nivel riesgo', 'Arl', 'Sena', 'ICBF', 'CAJAS', 'Total para', 'Cesantias', 'Int / cesantia', 'Prima', 'Vacaciones', 'Total presta', 'Total nomina',
'<div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example"><button type="button" class="btn btn-success" id="addNewItem" onclick="addNewUsuer()">Nuevo</button></div>']; // table headers.

// Entrada de datos de esta forma:
// DNI - Nombre - Sueldo - Dias trabajados - Horas(no importa) - HEN - HEDD - HEDN - RECNOC - Hora(no importa)
data0 = ['1030524257', 'David Sanchez', '20000000', '30', '15', '5', '9', '4', '1', '1'];
data1 = ['1000365847', 'Vicente Ros', '1200000', '30', '15', '5', '9', '4', '1', '1'];
data2 = ['1030524257', 'David Sanchez', '1500000', '30', '5', '6', '7', '7', '10', '10'];
data3 = ['1030524257', 'David Sanchez', '1500000', '30', '5', '6', '7', '7', '10', '10'];
data4 = ['1030524257', 'David Sanchez', '1500000', '30', '5', '6', '7', '7', '10', '10'];

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
  var idPerson = document.getElementById('idPerson').value;
  var namePerson = document.getElementById('namePerson').value;
  var mensualSalary = document.getElementById('mensualSalary').value;
  var daysWorked = document.getElementById('daysWorked').value;
  var extraHoursPerson = document.getElementById('extraHoursPerson').value;
  var HEDPerson = document.getElementById('HEDPersona').value;
  var HENPerson = document.getElementById('HENPerson').value;
  var HEEDPerson = document.getElementById('HEEDPerson').value;
  var HEDNPerson = document.getElementById('HEDNPerson').value;
  var nightHoursPerson = document.getElementById('nightHoursPerson').value;
  
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
      var smlv = 908526;
      var arlPersona = 0;
      var auxTrans = 0;
      var horaOrdinaria = 0;
      var basico = Math.ceil((mensualSalary*daysWorked)/30);

      if (mensualSalary > (smlv*2)){
        auxTrans = 0;
      } else {
        auxTrans = 106454;
      }

      var horaOrdinaria = Math.ceil(mensualSalary/240);
      var recNoc = 0;
      var totalExtra = Math.ceil((horaOrdinaria*HEDPerson*1.25 )+(horaOrdinaria*HENPerson*1.75)+(horaOrdinaria*HEEDPerson*2)+(horaOrdinaria*HEDNPerson*2.5)+(horaOrdinaria*recNoc*0.35));
      var totalDeVengado = Math.ceil(totalExtra + auxTrans + basico);
      var saludEmpleado = Math.ceil((totalDeVengado - auxTrans)*0.04);
      var pensionEmpleado = Math.ceil(saludEmpleado);
      var fondoSol = 0;
      var UVT = Math.ceil(((totalDeVengado-saludEmpleado-pensionEmpleado-fondoSol)*0.75)/36308);
      var retefuente = 0; //NO ES QUE MIERDA ES ESA WEBONADA
      var retePesos = Math.ceil(retefuente*36308);
      var totalDeducido = Math.ceil(retePesos+fondoSol+pensionEmpleado+pensionEmpleado);
      var saludPat = Math.ceil(((totalDeVengado-auxTrans)*4.5)/100);
      var pensionPat = Math.ceil((totalDeVengado*auxTrans)*0.12);
      var nivelRisgo = 2;

      if (nivelRisgo == 1){
        arlPersona = Math.ceil((totalDeVengado-auxTrans)*0.00522);
      }else if (nivelRisgo == 2) {
        arlPersona = Math.ceil((totalDeVengado-auxTrans)*0.01044);
      }else if (nivelRisgo == 3) {
        arlPersona = Math.ceil((totalDeVengado-auxTrans)*0.02436);
      }else if (nivelRisgo == 4) {
        arlPersona = Math.ceil((totalDeVengado-auxTrans)*0.0435);
      }else if (nivelRisgo == 5) {
        arlPersona = Math.ceil((totalDeVengado-auxTrans)*0.0696);
      }

      var senaCalculo = Math.ceil((totalDeVengado-auxTrans)*0.02);
      var icbfCalculo = Math.ceil((totalDeVengado-auxTrans)*0.03);
      var cajasCalculo = Math.ceil(totalDeVengado*0.04);
      var totalPara = Math.ceil(nivelRisgo + arlPersona + senaCalculo + icbfCalculo + cajasCalculo);
      var cesantias = Math.ceil(totalDeVengado*0.0833);
      var intCesantias = Math.ceil((cesantias*1)/100);
      var primaCalculo = Math.ceil(cesantias);
      var vacacionesCalculo = Math.ceil((totalDeVengado-auxTrans)*0.0417);
      var totalPresta = Math.ceil(cesantias+intCesantias+primaCalculo+vacacionesCalculo);
      var totalNomina = Math.ceil((totalPresta+totalPara+totalDeVengado)-totalDeducido);

      //array
      rowDataArrays = [idPerson, namePerson, mensualSalary, daysWorked, basico, auxTrans, horaOrdinaria, HEDPerson, HENPerson, HEEDPerson, HEDNPerson, recNoc, totalExtra, totalDeVengado, saludEmpleado, pensionEmpleado, fondoSol, UVT, retefuente, retePesos, totalDeducido, saludPat, pensionPat, nivelRisgo, arlPersona, senaCalculo, icbfCalculo, cajasCalculo, totalPara, cesantias, intCesantias, primaCalculo, vacacionesCalculo, totalPresta, totalNomina];
      if (c == 0) {
        //adding to th
        tr.appendChild(th);

        //creating the number
        th.innerHTML = (th.parentNode.rowIndex);
      }
      else if (c == 36) {   // if its the first column of the table.
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
      else{
        td = tr.insertCell(c);

        td.innerHTML = rowDataArrays[c-1];

        
      }
  }
}

//Auto add data to the table
function autoAddData(){

  var names = document.getElementById('idPerson');
  var prices = document.getElementById('namePerson');
  var taxesPorcentajes = document.getElementById('mensualSalary');
  var quantity = document.getElementById('daysWorked');
  var extraHours = document.getElementById('extraHoursPerson');
  var HED = document.getElementById('HEDPersona');
  var HEN = document.getElementById('HENPerson');
  var HEED = document.getElementById('HEEDPerson');
  var HEDN = document.getElementById('HEDNPerson');
  var nightHours = document.getElementById('nightHoursPerson');

  for (var i = 0; i < 5; i++) {

    names.value = eval('data'+(i))[0];
    prices.value = eval('data'+(i))[1];
    taxesPorcentajes.value = eval('data'+(i))[2];
    quantity.value = eval('data'+(i))[3];
    extraHours.value = eval('data'+(i))[4];
    HED.value = eval('data'+(i))[5];
    HEN.value = eval('data'+(i))[6];
    HEED.value = eval('data'+(i))[7];
    HEDN.value = eval('data'+(i))[8];
    nightHours.value = eval('data'+(i))[9];

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
  var hours = sourceEtiquet.getElementsByTagName('td')[4].innerText;
  var HEDChange = sourceEtiquet.getElementsByTagName('td')[8].innerText;
  var HENChange = sourceEtiquet.getElementsByTagName('td')[7].innerText;
  var HEEDChange = sourceEtiquet.getElementsByTagName('td')[8].innerText;
  var HEDNChange = sourceEtiquet.getElementsByTagName('td')[9].innerText;
  var nightHoursChange = sourceEtiquet.getElementsByTagName('td')[8].innerText;
  console.log(sourceEtiquet);

  // Data of the inputs
  var names = document.getElementById('idPerson');
  var prices = document.getElementById('namePerson');
  var taxesPorcentajes = document.getElementById('mensualSalary');
  var quantity = document.getElementById('daysWorked');
  var extraHours = document.getElementById('extraHoursPerson');
  var HED = document.getElementById('HEDPersona');
  var HEN = document.getElementById('HENPerson');
  var HEED = document.getElementById('HEEDPerson');
  var HEDN = document.getElementById('HEDNPerson');
  var nightHours = document.getElementById('nightHoursPerson');

  //change the values of the inputs
  names.value = artBookName;
  prices.value = priceTaxes;
  taxesPorcentajes.value = taxPorcentaje;
  quantity.value = quantityBooks;
  extraHours.value = hours;
  HED.value = HEDChange;
  HEN.value = HENChange;
  HEED.value = HEEDChange;
  HEDN.value = HEDNChange;
  nightHours.value = nightHoursChange;

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
