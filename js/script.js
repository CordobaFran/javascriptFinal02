let cantidad;
let userLocal;

class Cuenta{
    constructor(titular, cuenta, user, pass, numCuenta, nombCuenta){
        this.titular = titular;
        this.cantidad = cuenta;
        this.user = user;
        this.pass = pass;
        this.numCuenta = numCuenta;
        this.nombCuenta = nombCuenta;
    }
}

const cuentas =[]
cuentas.push(new Cuenta("Franco Damian Cordoba", 5000, 36784909, 1905, "01-123456-10", "Caja de Ahorro"));
cuentas.push(new Cuenta("Ana Reyes", 20000, 94475963, 2056, "01-753213-10", "Caja de Ahorro"));
cuentas.push(new Cuenta("Gilberto Cordoba" , 60000, 14598212, 2012, "01-123453-10", "Caja de Ahorro"));
cuentas.push(new Cuenta("Eva Farfan" , 90000, 13409461, 1992, "01-437834-10", "Caja de Ahorro"));

function currency(number){
    return new Intl.NumberFormat('eu-ES', { style: 'currency', currency: 'ARS' }).format(number);
}

function btnIngresar(){
    //LISTENER DE BOTON INGRESAR EN LOGIN
    let ingresarBtn = document.getElementById("ingresar");
    ingresarBtn.addEventListener("click", ()=>{getUser()});
}

function getUser(){
    //OBTENCION DATOS DE FORMULARIO
    let userID = document.getElementById("user").value;
    let userPass = document.getElementById("password").value;

    //FILTRADO DE USUARIOS SEGUN LO INGRESADO EN USERID
    let userFilteredJSON = JSON.stringify(cuentas.find((el)=> el.user == userID));
    let userFiltered = JSON.parse(userFilteredJSON);
    
    //VALIDACION DE USUARIO Y CONTRASEÑA
    if(userID == userFiltered.user && parseInt(userPass) === userFiltered.pass){
        localStorage.setItem("usuario", userFilteredJSON);
        window.location.href = 'views/inicio.html';
    }else{
        let incorrect = document.getElementById("userPassIncorrect")
        incorrect.innerHTML = ""
        incorrect.append("USUARIO O CONTRASEÑA INCORRECTA")
    }
}

function inicio(){
    //EXTRACCION DATOS USUARIO LOGUEADO
    let userFiltered = JSON.parse(localStorage.getItem("usuario"));
    
    //COLOCACION DATOS DE USUARIO EN INICIO
    let divDatos = document.getElementById("div__inicio__datos")
        divDatos.innerHTML = "";
    let parrafo = document.createElement("p");
        parrafo.innerHTML = `<h4 class="font-weight-bolder h2">${userFiltered.titular}</h4>
                            <h4>Cuenta N° ${userFiltered.numCuenta}</h4>
                            <h4>${currency(userFiltered.cantidad)}</h4>`;
        divDatos.append(parrafo);
}

function cuenta(){
    //EXTRACCION DATOS USUARIO LOGUEADO
    let userFiltered = JSON.parse(localStorage.getItem("usuario"));

    //TITULAR DE LA PAGINA
    let cuentaH1 = document.getElementById("cuentaH1")
        cuentaH1.innerHTML = "";
        cuentaH1.innerHTML = `CUENTAS DE ${(userFiltered.titular).toUpperCase()}`; 

    //DATOS DE CUENTA
    let cuentaBox = document.getElementById("cuentaBox")
        cuentaBox.innerHTML = "";
    let box = document.createElement("p");
    box.innerHTML = `<h4 class="box__text text-center pt-3 mt-5 mb-5 h2">${userFiltered.nombCuenta}</h4>
                    <h4 class="box__text text-center mt-3 font-weight-bolder h1">${currency(userFiltered.cantidad)}</h4>
                    <h4 class="box__text text-center mt-3 h3">Cuenta N° ${userFiltered.numCuenta}</h4>`;
    cuentaBox.append(box);
}

function closeSesion(){
    let cerrarSesion = document.getElementById("cerrarSesion");

    //BORRADO DE STORAGE POR CIERRE DE SESION Y REDIRECCIONADO A LOGIN
    cerrarSesion.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.pathname = '../index.html';
        localStorage.clear();
    });
}

//SELECCION DE FUNCION POR CADA PAG CON ID DE BODY
let pages = document.body.id;
switch (pages) {
    case "index":
        btnIngresar();
        break;
    case "inicio" :
        inicio();
        closeSesion()
        break;
    case "cuenta" :
        cuenta();
        closeSesion()
        break;    
    default:
        break;
}

