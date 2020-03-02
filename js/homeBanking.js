//Declaración de variables

var nombreUsuario = iniciarSesion();
var saldoCuenta = 10000;
var limiteExtraccion = 3000;

function sumarDinero(monto){
    saldoCuenta += monto;
}

function restarDinero(monto){
    saldoCuenta -= monto;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//TODO
function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExtraccion = parseInt(prompt("Ingrese el nuevo límite de extracción:"));

    if (nuevoLimiteExtraccion === null) {
        return;
    }

    if (nuevoLimiteExtraccion == '') {
        alert("Debe ingresar un número positivo a extraer.");
        return;
    }

    var nvoLimExt = parseInt(nuevoLimiteExtraccion);
    if (nvoLimExt < 0) {
        alert("El límite de extracción debe ser un número positivo.");
        return;   
    }

    limiteExtraccion = nvoLimExt;
    actualizarLimiteEnPantalla();
    alert("El límite de extracción se actualizó. Ahora es de: $" + limiteExtraccion + ".");
}

function extraerDinero() {
    var extraerMonto = prompt("Ingrese el monto a extraer de su cuenta:");
    
    if (extraerMonto === null) {
        return;
    }

    if (extraerMonto == '') {
        alert("Debe ingresar un número positivo a extraer.");
        return;
    }

    var extraccion = parseInt(extraerMonto);
    if (extraccion < 0) {
        alert("Debe ingresar un número positivo a extraer.");
        return;   
    } else {
        if (extraccion > limiteExtraccion) {
            alert("El monto máximo a extraer es de $" + limiteExtraccion + ".");
            return;
        }
    }

    var saldoAnterior = saldoCuenta;
    restarDinero(extraccion);
    actualizarSaldoEnPantalla();
    alert("Estado de su cuenta\n1. Saldo anterior: $ "+saldoAnterior+"\n2. Dinero extraído: $ "+extraccion+"\n3. Saldo actual: $ "+saldoCuenta);
}

function depositarDinero() {
    var depositarMonto = prompt("Ingrese el monto a depositar en su cuenta:");
    if (depositarMonto === null) {
        return;
    }

    if (depositarMonto == '') {
        alert("Debe ingresar un número positivo a depositar.");
        return;
    }

    var depositarMonto = parseInt(depositarMonto);
    if (depositarMonto < 0) {
        alert("Debe ingresar un número positivo a depositar.");
        return;
    }

    var depositar = parseInt(depositarMonto);
    var saldoAnterior = saldoCuenta;
    sumarDinero(depositar);
    actualizarSaldoEnPantalla();
    alert("Estado de tu cuenta\n1. Saldo anterior: $ "+saldoAnterior+"\n2. Dinero depositado: $ "+depositar+"\n3. Saldo actual: $ "+saldoCuenta);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {
    var flag = -1;

    while(flag == -1) {
        var nombreUsu = prompt("Ingrese su nombre.");
        flag = 1;

        if (nombreUsu.length === 0 || nombreUsu.replace(/\s/g,"") == "") {
            alert("El campo no puede estar vacío.");
            flag = -1;
        }

        // TODO
        // if (nombreUsu === !isNaN(nombreUsu)) {
        //     alert("El campo no puede contener números.");
        //     flag = -1;
        }

    return nombreUsu;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = `Bienvenido/a ${nombreUsuario}`;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = `$${saldoCuenta}`;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = `Tu nuevo límite de extracción es $${limiteExtraccion}`;
}