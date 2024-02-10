// String primitivo

const stringPrimitivo = 'soy un string primitivo';
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('soy un string primitivo tambien');
console.log(typeof stringPrimitivoTambien)

// String objeto
const stringObjeto = new String('soy un string objeto')
console.log(typeof stringObjeto)

// acceder a caracteres
const saludo = 'Hola. ¿como estas?';

console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('como'))
console.log(saludo.indexOf('Como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacio = ' hola mundo'
const saludoSinEspacio = saludoConEspacio.trim()
console.log(saludoSinEspacio)

const saludoOriginal = 'hola mundo'
const nuevoSaludo = saludoOriginal.replace('mundo', 'amor')
console.log(nuevoSaludo)

