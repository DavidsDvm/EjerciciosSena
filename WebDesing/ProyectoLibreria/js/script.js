var button_func = 'false';
const button = document.getElementById("btn_form");

function enableButt(){
    button.disabled = false;
    alert("Ya terminaron los 5 minutos, puede volver a intentar")
    sessionStorage.removeItem('disblebutt');
    sessionStorage.clickcount = 0;
    intentos = 0;
    button_func = 'false';
}

if (sessionStorage.getItem('function_1')) {
    button_func = sessionStorage.getItem('function_1');
}
console.log(button_func)
if (button_func == 'true') {
    button.disabled = true;
    window.setTimeout(enableButt, 60000);
}

function myFunction() {

    var intentos = 3;
    const button = document.getElementById("btn_form");

    var mail = document.getElementById("floatingInput").value;
    var pass = document.getElementById("floatingPassword").value;

    if (mail == "Camilo123" && pass == "56789"){
        window.location.replace("form.html");
        alert("Bievenido, ingreso sus datos correctamente");        
    } else {
        if(typeof(Storage) !== "undefined") {
            if (sessionStorage.clickcount) {
                sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            } else {
                sessionStorage.clickcount = 1;
            }
            console.log("You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.");
        }
        var intentos = intentos - sessionStorage.clickcount;
        alert("Ingreso MAL sus datos!! Le quedan: "+intentos+" Intentos");
    }

    if (intentos == 0 || intentos < 0) {
        button.disabled = true;
        sessionStorage.setItem('function_1', 'true');
        button_func = sessionStorage.getItem('function_1');
        alert("Ha llegado al numero maximo de intentos, espere 5 minutos");
    }

  }