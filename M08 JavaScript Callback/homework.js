/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:


   // let mayus = nombre.split('')
   // let newArr = []
   // let firstLetter = newArr.push(mayus[0].toUpperCase())

   // for (let i = 1; i < mayus.length; i++) {
   //    newArr.push(mayus[i])
   // }  

   // return newArr.join('')

   let forma2 = nombre[0].toUpperCase() + nombre.slice(1)

   return forma2
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2)
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let suma = 0
   for (let index = 0; index < arrayOfNumbers.length; index++) {
      suma += arrayOfNumbers[index]
   }
   cb(suma)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(element => {
      cb(element)
   });
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let newArr = [];

   array.map(element => {
      let result = cb(element)
      newArr.push(result)      
   });
   return newArr
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   
   // let newArr = arrayOfStrings.filter(element => element[0] === 'a')
   // return newArr

   return arrayOfStrings.filter(element => element[0] === 'a')
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};


/* // clase callback
var nombre = () => 'Camilo'
var frase = () => 'Hola'

var saludar = function (fun1, fun2) {
   return `${fun1()} ${fun2()}`
}
var resultado = saludar(frase, nombre)

console.log(saludar(frase, nombre)); //solo mostrado en consola
console.log(resultado); //guardado en variable para uso posterior

// clase2
let functionFrase = (seleccionaComida) => `hoy quiero comer ${seleccionaComida}`

let hablar = (seleccionaComida, callback) => callback(seleccionaComida)
let alimento = 'pizza'


let fraseFinal = hablar(alimento, functionFrase)
   //recibe el alimento
   //recibe la función
   //mete alimento en la función
   //devuelve Frase

console.log(fraseFinal) */