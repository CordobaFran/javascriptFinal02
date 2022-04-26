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
    let usuario = parseInt(prompt("Ingrese su usuario"))
    let userFiltered = cuentas.find((el)=> el.user === usuario);

    if (userFiltered == undefined) {
        do{
            usuario = parseInt(prompt("Usuario incorrecto, Ingreselo de nuevo"));
            userFiltered = cuentas.find((el)=> el.user === usuario);
        }while(userFiltered == undefined);
        activeUser = userFiltered;
        password(activeUser);        
    }else{
        activeUser = userFiltered;
        password(activeUser);
    }

    return activeUser = userFiltered;
}

function password(userAct){
    let pwrd = prompt("Ingrese su contraseña");
    if(pwrd == userAct.pass){
        console.log("ENTRASTE");
        alert(`Bienvenido/a:\n${userAct.titular}`);     
    }else{
        alert("Contraseña erronea");
        password(userAct.pass);
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
            activeUser.mostrar();
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
    activeUser.ingresar(cantidad);
}

function retirar(){
    cantidad = parseInt(prompt("ingrese la cantidad de dinero a retirar"));
    activeUser.retirar(cantidad);
}

function salir(){
    alert("Muchas gracias por elegirnos.\nHasta luego");
}

ingreso();
inicio();
