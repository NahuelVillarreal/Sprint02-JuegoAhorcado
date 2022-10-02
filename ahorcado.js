let palabra_seleccionada = document.getElementById("palabra-adivinar");
let palabras = ["HOLA", "JAMON", "MILANESA", "PAPA", "ASADO", "MATE", "VASO", "OTORRINOLARINGOLOGIA", "CELULAR", "TERMO", "ESTERNOCLESTOMASTOIDEO", "ARBOL", "CIECIOLOGIA", "COMPUTADORA", "ORACLE", "TECLADO"];
let contador = -1;
let contador2 = 0;
let partes = document.getElementsByClassName("img");
let ganaste = document.querySelector(".ganaste");
let perdiste = document.querySelector(".perdiste");
let principal = document.querySelector(".principal");
let previo = document.querySelector(".previo");
let agregar = document.querySelector(".palabra-agregar");
let palabra_correcta = document.createElement("p");

function agnadir_palabra() {
    var palabra = document.querySelector("#palabra");
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(palabra.value)){
        palabra = palabra.value.toUpperCase();
        palabras.push(palabra);
        alert("Palabra agregada con éxito.");
        previo.style.cssText = "visibility:visible;";
        agregar.style.cssText = "visibility:hidden;";        
    }else {
        alert("Por favor coloque solo letras.");
    }
}

function seleccionar_palabra() {
    var num = Math.trunc((Math.random()*palabras.length))
    return palabras[num];
}

let seleccion = seleccionar_palabra();

let mostrar = "_".repeat(seleccion.length);

palabra_seleccionada.value = mostrar;

function seleccionar_letra(letra) {
    contador2 = 0;
    for(var i=0; i<seleccion.length; i++) {
        if (seleccion[i] === letra) {
            var pre = mostrar.slice(0, i);
            var aft = mostrar.slice(i+1, mostrar.length+1);
            mostrar = [pre, letra, aft].join('');
            contador2++;
        }
    }
    palabra_seleccionada.value = mostrar;
    if (contador<10 && mostrar==seleccion){
        ganaste.style.cssText = "visibility:visible;";
        principal.style.cssText = "opacity:0.4";
    }

    if (contador2==0){
        contador++;
        mostrar_mugneco(contador);
    }

    if (contador2==0) {
        var errado = document.getElementById(letra);
        errado.style.cssText = "background-color:red";
    }else {
        var acertado = document.getElementById(letra);
        acertado.style.cssText = "background-color:green";
    }
}

function mostrar_mugneco(contador) {
    partes[contador].style.cssText = "visibility:visible;";
    if (contador==10) {
        palabra_correcta.textContent = "La palabra correcta es: "+seleccion;
        perdiste.insertAdjacentElement("beforebegin", palabra_correcta);
        perdiste.style.cssText = "visibility:visible;";
        principal.style.cssText = "opacity:0.4";
    }
}

function juego_nuevo() {
    principal.style.cssText = "visibility:visible;";
    previo.style.cssText = "visibility:hidden;";
}

function agregar_palabra() {
    previo.style.cssText = "visibility:hidden;";
    agregar.style.cssText = "visibility:visible;";
}