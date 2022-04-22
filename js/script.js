// 3) Crear una clase llamada Cuenta que contenga los siguientes atributos: titular (que
//     es una persona) y cantidad (que pueden ser decimales). Crear su constructor y tiene
//     que poseer los siguientes métodos:
//     a) mostrar() que muestra los datos de la cuenta
//     b) ingresar(cantidad) ingresa cantidad de dinero a la cuenta (Si la cantidad es
//     negativa no se hace nada)
//     c) retirar(cantidad) se retira una cantidad de la cuenta.

let cantidad;

class Cuenta{
    constructor(titular, cuenta, user, pass){
        this.titular = titular;
        this.cantidad = cuenta;
        this.user = user;
        this.pass = pass;
    }
    mostrar(){
        alert(`Nombre de titular: ${this.titular}\nMonto en la cuenta: $${this.cantidad}`);
        inicio();
    }
    ingresar(cantidad){  
        if (cantidad > 0){
            this.cantidad += cantidad;
            alert(`Ud. ha ingresado ${cantidad} a su cuenta`)
            inicio();
        } else {
            alert("Ingrese un monto válido")
        }
        console.log(cantidad)
    }
    retirar(cantidad){
        if(cantidad <= this.cantidad){
            this.cantidad = this.cantidad - cantidad;
            alert(`Ud. ha retirado ${cantidad}`)
            inicio();
        }else {
            alert("Ud no tiene fondos suficientes\nIntente con otro monto.")
        }
    }
    salir(){
        alert("Muchas gracias por elegirnos.\nHasta luego")
    }
}

const cuentas =[]
cuentas.push(new Cuenta("Franco Cordoba", 5000, 36784909, 1905))
cuentas.push(new Cuenta("Ana Reyes", 20000, 94475963, 2056))
cuentas.push(new Cuenta("Gilberto Cordoba" , 60000, 14598212, 2012))
cuentas.push(new Cuenta("Eva Farfan" , 90000, 13409461, 1992))
// const Cuenta01 = new Cuenta("Franco Cordoba", 5000)


function ingreso(){
    let usuario = prompt("Ingrese su usuario")
    for (const user of cuentas){
        console.log(cuentas.includes(usuario).user);
    }
    let pass = prompt("Ingrese su contraseña")
    
}

function inicio(){
    let opcion = prompt(`Ingrese una opción para continuar:
            a) Mostrar cuenta
            b) Ingresar dinero
            c) Retirar dinero
            d) Salir`).toLowerCase(); 
    switch (opcion) {
        case "a":
            cuentas[1].mostrar();
            inicio();
            break;
        case "b":
            ingresar();
            inicio();
            break;
        case "c":
            retirar();
            inicio()
            break;
        case "d":
            cuentas[1].salir();
            break;
        default:
            alert("Ingresó una opción incorrecta.\nIntentelo nuevamente")
            inicio();
            break;
    }

}

function ingresar(){
    cantidad = parseInt(prompt("Ingrese la cantidad de dinero a depositar"));
    cuentas[1].ingresar(cantidad);
}

function retirar(){
    cantidad = parseInt(prompt("ingrese la cantidad de dinero a retirar"));
    cuentas[1].retirar(cantidad);
}

ingreso();
inicio();
