// BOOKLET

//Actividad 1
/*Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente.
Es indistinto el empleo de var o let en la declaración.*/

let nombre = "Homero";
let apellido = "Simpson";
let edad = 39;

console.log(nombre);
console.log(apellido);
console.log(edad);

//Actividad 2
/*Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades.
Generalmente, dichas variables se declaran con const.*/

const ciudad1= "Springfield";
const ciudad2 = "Shelbyville";
const ciudad3 = "Ciudad Capital";
const ciudad4 = "Villa la Angostura";
const ciudad5 = "Quilmes";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

//Actividad 3
/*Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.*/

let id = "B47U89RE243";
let nombreCarnet = "Bart";
let apellidoCarnet = "Simpson";
let direccion = "742 Evergreen Terr. Springfield, USA."
let fechaNac = "02-11-70";

const carnetBart = `Carnet ${id} 
Nombre y apellido: ${nombreCarnet} ${apellidoCarnet}
Dirección: ${direccion}
Fecha de nacimiento: ${fechaNac}`;

console.log(carnetBart);

//Actividad 4
/*Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia.
Luego, concatenar dichas entradas y efectuar una salida por alerta.*/

let nombre1 = "Jorge";
let nombre2 = "Mariana";
let nombre3 = "Guillermo";
let nombre4 = "Leonel";
let nombre5 = "Tiziano";

let familia = `Los integrantes de la familia Montiel son:
Padre: ${nombre1}
Madre: ${nombre2}
Hijo mayor: ${nombre3}
Hijo menor: ${nombre4}
Hijo de hijo mayor: ${nombre5}`;

alert(familia);

//Actividad 5
/*Solicitar al usuario uno o más precios. Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera)
sobre los valores ingresados, y realizar una salida.*/

alert("Calculador de descuento (20%) en tres productos");

let precio1 = parseInt(prompt("Por favor, ingrese el precio del primer artículo:"));
let precio2 = parseInt(prompt("Por favor, ingrese el precio del segundo artículo:"));
let precio3 = parseInt(prompt("Por favor, ingrese el precio del tercer artículo:"));

let precioTotal = (precio1 + precio2 + precio3);
let totalDescuento = precioTotal  * 0.8;

alert(`Total de productos sin descuento: $${precioTotal}
Total a pagar con descuento del 20%: $${totalDescuento}`);