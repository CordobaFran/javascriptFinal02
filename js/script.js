// 3) Crear una clase llamada Cuenta que contenga los siguientes atributos: titular (que
//     es una persona) y cantidad (que pueden ser decimales). Crear su constructor y tiene
//     que poseer los siguientes métodos:
//     a) mostrar() que muestra los datos de la cuenta
//     b) ingresar(cantidad) ingresa cantidad de dinero a la cuenta (Si la cantidad es
//     negativa no se hace nada)
//     c) retirar(cantidad) se retira una cantidad de la cuenta.

let cantidad;
let activeUser;

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
            alert(`Ud. ha ingresado ${cantidad} a su cuenta`);
            inicio();
        } else {
            alert("Ingrese un monto válido");
            ingresar();
        }
    }
    retirar(cantidad){
        if(cantidad <= this.cantidad){
            this.cantidad = this.cantidad - cantidad;
            alert(`Ud. ha retirado ${cantidad}`);
            inicio();
        }else {
            alert("Ud no tiene fondos suficientes\nIntente con otro monto.");
            retirar();

        }
    }
}

const cuentas =[]
cuentas.push(new Cuenta("Franco Cordoba", 5000, 36784909, 1905));
cuentas.push(new Cuenta("Ana Reyes", 20000, 94475963, 2056));
cuentas.push(new Cuenta("Gilberto Cordoba" , 60000, 14598212, 2012));
cuentas.push(new Cuenta("Eva Farfan" , 90000, 13409461, 1992));

function ingreso(){
    let usuario;
    let login;

    do{
        usuario  = prompt("Ingrese su usuario");
        for(i=0; i<cuentas.length; i++){
            if(usuario == cuentas[i].user){
                login = true;
                password(i);                
                break;
            }else{
                login = false;
            }
        }
        if(login == false){
            alert("Usuario incorrecto.\nIntentelo nuevamente.");
        }
    }while(login == false);
    
    return i;  
}

function password(pass){
    let pwrd = prompt("Ingrese su contraseña");
    if(pwrd == cuentas[pass].pass){
        console.log("ENTRASTE");
        alert(`Bienvenido. ${cuentas[pass].titular}`);     
    }else{
        alert("Contraseña erronea");
        password(pass);
    }
}

function inicio(){
    let opcion = prompt(`Ingrese una opción para continuar:
            a) Mostrar cuenta
            b) Ingresar dinero
            c) Retirar dinero
            d) Salir`).toLowerCase(); 
    switch (opcion) {
        case "a":
            cuentas[activeUser].mostrar();
            break;
        case "b":
            ingresar();
            break;
        case "c":
            retirar();
            break;
        case "d":
            salir();
            break;
        default:
            alert("Ingresó una opción incorrecta.\nIntentelo nuevamente");
            inicio();
            break;
    }
}

function ingresar(){
    cantidad = parseInt(prompt("Ingrese la cantidad de dinero a depositar"));
    cuentas[activeUser].ingresar(cantidad);
}

function retirar(){
    cantidad = parseInt(prompt("ingrese la cantidad de dinero a retirar"));
    cuentas[activeUser].retirar(cantidad);
}

function salir(){
    alert("Muchas gracias por elegirnos.\nHasta luego");
}

activeUser = ingreso();
inicio();
