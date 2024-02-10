// tipo de datos primitivo - inmutable
const numero = 23; // Utilizar const para declarar valores que no cambiarán
// numero = numero + 10; // Esto generará un error, ya que no puedes modificar un valor constante
console.log(numero);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

// tipo de dato complejo - mutable
let usuario = { nombre: "pepito", edad: 15 };
usuario.edad = 20;
console.log(usuario);

let frutas = ['manzana', 'pera'];
frutas[0] = 'sandia';
console.log(frutas);

function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = {nombre: 'Antonio'}
cambiarNombre(persona)

console.log(persona)