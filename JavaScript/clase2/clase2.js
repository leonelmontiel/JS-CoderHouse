/* let edad = parseInt(prompt(" PROGRAMA QUE DETERMINA SI PODÉS INGRESAR AL BOLICHE \n Ingrese su edad: "));

if (edad >= 18) {
    alert("Podés ingresar! No armes quilombo dentro, xfa.");
} else {
    alert("Tas chiquito, andá para casa.");
} */


/* ACTIVIDAD EN CLASE 
Crea unalgoritmo que solicite al usuario uno o más valores ingresados por prompt(),
compare las entradas y, en función de ciertas condiciones, muestre un resultado */

alert("PROGRAMA PARA DETERMINAR QUE HACER EN LA MAÑANA");

let dia = prompt("Ingrese el día a consultar: ");
let clima = parseInt(prompt("Ingrese los grados centígrados para la mañana de ese día, solo con números: "));

if ( (dia == "Domingo" || dia == "domingo") && (clima >=15 && clima <= 28) ) {
    alert("Lindo día para salir a trotar bien temprano");
} else if ( (dia == "Domingo" || dia == "domingo") && clima < 15 ) {
    alert("Va a estar elao, tomate un cafecito y volvé a la cama");
} else if ( (dia == "Domingo" || dia == "domingo") && clima > 28 ) {
    alert("Va a hacer mucho calor, es peligroso para salir a trotar. Prendé el aire y ponete a estudiar");
} else {
    alert("Como no es domingo, te toca laburar o estudiar a la mañana, así que preparate mentalmente para afrontar lo que queda de la semana");
}



