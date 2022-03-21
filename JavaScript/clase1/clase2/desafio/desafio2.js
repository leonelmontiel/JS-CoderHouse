/* DESAFIO CLASE 2

CREAR UN ALGORITMO UTILIZANDO UN CICLO
Tomando como base los ejemplos anteriores de las estructuras for y while,
crear un algoritmo que repita un bloque de instrucciones. En cada repetición
es necesario efectuar una operación o comparación para obtener una salida
por alerta o por consola. */

alert("SISTEMA DE COMPRA DE ENTRADAS DE CINE\n¡Bienvenido/a a Boedo Cinema!");

let pelicula = parseInt(prompt(`¿Qué película querés ver? \n Ingresá el número acorde a tu elección:
1. The Batman \n2. Spider-Man: No Way Home \n3. Uncharted: Fuera del mapa \n4. Sing 2 \n5. King: Regreso a casa`));

switch(pelicula) {
    case 1 :
        alert(`La película que elegiste fue The Batman`);
        break;
    case 2 :
        alert(`La película que elegiste fue Spider-Man: No Way Home`);
        break;
    case 3 :
        alert(`La película que elegiste fue SUncharted: Fuera del mapa`);
        break;
    case 4 :
        alert(`La película que elegiste fue Sing 2`);
        break;
    case 5 :
        alert(`La película que elegiste fue King: Regreso a casa`);
        break;
}

let cantEntradas = parseInt(prompt(`¿Cuántas entradas querés?`));

let filaAsiento;
let numeroAsiento;
for (let i = 1; i <= cantEntradas; i++) {
    filaAsiento = prompt( `Para la entrada n°${i}
    Estas son las filas de asientos disponibles para elegir, ingresá la letra (en mayúscula) acorde a tu elección:
- A \n- B \n- E \n- G \n- K`);

    numeroAsiento = prompt( `Para la entrada n°${i}
    Estos son los números de asientos disponibles para elegir en la fila ${filaAsiento}, ingresá el número acorde a tu elección:
- 1 \n- 2 \n- 5 \n- 9 \n- 10 \n- 11 \n- 13`);

    alert(`la ubicación ${filaAsiento}-${numeroAsiento} quedó registrada para la entrada n°${i}`);
}

let totalAPagar = 0;
let valorEntrada = 750;
while (cantEntradas > 0) {
    totalAPagar += valorEntrada;
    cantEntradas--;
}

let decisionPago = prompt(`El total a pagar es $${totalAPagar}
¿Querés confirmar la compra? Seleccioná el número correspondiente: 
1. SÍ \n2. NO`);

if (decisionPago == 1) {
    alert(`¡TU COMPRA SE REALIZÓ CON ÉXITO!
    Te llegará un correo electrónico con los datos de la/s entrada/s para que presentes en ventanilla.
    
Muchas gracias por usar el sistema de compra de entradas de Boedo Cinema
    
¡Que disfrutes la película!`);
} else {
    alert(`TU RESERVA HA SIDO CANCELADA.
    
Muchas gracias por usar el sistema de compra de entradas de Boedo Cinema`)
}