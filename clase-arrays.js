var frutas = ["Manzana", "Platano", "cereza", "fresa"];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas.length);

// agregar metodos
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

// agregar un arreglo a ultimaa posicion
var masfrutas = frutas.push("uvas");

// elimina el ultimo que agregastes
var ultimo = frutas.pop("uvas");

// agregar a primera posicion
var nuevaLongitud = frutas.unshift("uvas");

// borrar elementos
var borrarFruta = frutas.shift("uvas");

// manda a llamar cualquier arreglo
var posicion = frutas.indexOf("Cereza");
