/* ACTIVIDAD 1
    YO NO FUI

Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.

let nombre1 = prompt("Ingrese un nombre: ");
let nombre2 = "Leonel";

if (nombre1 == nombre2) {
    alert("Fui yo ;)");
} else {
    alert("Yo no fui :|");
} */

/* ACTIVIDAD 2
    PRESIONAR Y

Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”.
Caso contrario, la salida será “Error”. 

let tecla = prompt("Ingrese una tecla (letra) en mínuscula o mayúscula: ");

if (tecla == "Y" || tecla == "y") {
    alert("¡Correcto!");
} else {
    alert("X Error X");
}*/

/* ACTIVIDAD 3
    ESCOGER PERSONAJE

Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
•   “Elegiste a Homero” si es 1.
•   “Elegiste a Marge” si es 2.
•   “Elegiste a Bart” si es 3.
•   “Elegiste a Lisa” si es 4.

let eleccion = parseInt(prompt(`Seleccioná a tu personaje indicando el número correspondiente:
1- Homero
2- Marge
3- Bart
4- Lisa`));

if (eleccion > 0 && eleccion < 5) {
    switch (eleccion) {
        case 1:
            alert("Elegiste a Homero");
            break;
        case 2:
            alert("Elegiste a Marge");
            break;
        case 3:
            alert("Elegiste a Bart");
            break;
        case 4:
            alert("Elegiste a Lisa");
            break;
    }
} else {
    alert("Ingresaste un número o caracter inválido");
}*/

/* ACTIVIDAD 4
    PRESUPUESTO

Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
•   “Presupuesto bajo” si está entre 0 y 1000.
•   “Presupuesto medio” si está entre 1001 y 3000.
•   “Presupuesto alto” si es  mayor que 3000.

let presupuesto = parseFloat(prompt("Por favor, ingrese el presupuesto con el que cuenta:"));

if (presupuesto >= 0 && presupuesto <= 1000) {
    alert("Presupuesto bajo :(");
} else if (presupuesto >= 1001 && presupuesto <= 3000) {
    alert("Presupuesto medio :|");
} else if (presupuesto > 3000) {
    alert("Presupuesto alto ;)");
} else {
    alert("Lo que ingresaste no es un presupuesto válido xd");
}

/* ACTIVIDAD 5
    VACÍO

Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, 
realizar una única salida compuesta por el listado de productos. Caso contrario, 
la salida será “Error: Es necesario cargar todos los productos”.*/

alert("LISTA DE PRODUCTOS DE ALMACÉN")

let prod1 = prompt("Ingrese el primer producto");
let prod2 = prompt("Ingrese el segundo producto");
let prod3 = prompt("Ingrese el tercer producto");
let prod4 = prompt("Ingrese el cuarto producto");

const prodCargados = (prod1 != " ") && (prod2 != " ") && (prod3 != " ") && (prod4 != " ");

if (prodCargados) {
    alert(`La lista de productos a comprar es:
• ${prod1}
• ${prod2}
• ${prod3}
• ${prod4}`)
} else {
    alert(`X ERROR X
    ¡Es necesario cargar todos los productos!`)
}