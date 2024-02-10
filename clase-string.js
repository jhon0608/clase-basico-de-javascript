// Creacion de string
const primeraOpcion = 'comillas simples'
const segundaOpcion = "comillas simples"
const terceraOpcion = `Comillas simples`

// 1. Concatenacion: Opcion +
const direccion = 'calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta ='mi direccion completa es ' + direccion + ciudad
console.log(direccionCompleta)


const direccionCompletaConEspacio = 'mi direccion completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)


// 2.Concatenacion: Template literals
const nombre = 'omar'
const pais ='panama'
const presentacion =`hola, soy ${nombre}  de ${pais}`
console.log(presentacion)

//  3. Concatenacion: join()

const primeraParte = 'Me encanta'
const segundaParte = 'la gentede'
const terceraParte = 'panama'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join('chiriqui'));

// 4.Concatenacion: concat ()
const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ',hobbie3)
console.log(hobbies)

// Caracteres de escape
// const whatDoIdo = 'I'm Software Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I' Software Engineer"

// 2. Barra invertida
const barraInvertida = 'I\'m SoftwareEngineer'

// 3. Template literals
const escapeComidaInvertida = `I'm Software Engineer`

// Escritura de Strings largos
/*
  las rosas son rojas,
  las violetas son azules,
  caracter inesperado
  En linea 86.
*/

const poema = 'las rosas son rojas,\n' +
              'las violetas son azules,\n' +
              'caracter inesperado,\n' +
              'En linea 86.'

console.log(poema)

const poema2 = 'las rosas son rojas,\n\
las violetas son azules,\n\
caracter inesperado,\n\
En linea 86.'

console.log(poema2);

const poema3 = `las rosas son rojas,
las violetas son azules,
caracter inesperado,
En linea 86.`

console.log(poema3)
