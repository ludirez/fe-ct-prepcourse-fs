/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { forEach } = require("../M08 JavaScript Callback/homework");

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:     
   
   
   //método largo
   let ejemploVIsual = {
      D: 1, 
      B: 2, 
      C: 3
   }

   let newArr = [];

   for (const key in objeto) { 
       newArr.push([key, objeto[key]])
   } 
   return newArr

   //método corto
   // return Object.entries(objeto)

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let newObj = {}
   
   for (let letter = 0; letter < string.length; letter++) {
      if (newObj.hasOwnProperty(string[letter])) {
    
       newObj[string[letter]] = newObj[string[letter]] + 1
   
      } else{
         newObj[string[letter]] = 1
      }
      
   }

      return newObj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let newArr = string.split('')
   let mayus = []
   let minus = []
   
   newArr.forEach(element => {
     if (element === element.toUpperCase()){
         mayus.push(element)
     }else{
         minus.push(element)
     }
  });
   
   return mayus.join('')+minus.join('')

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let newArr = frase.split(' ')

   let newFrase = newArr.map(element => {
      return element.split('').reverse().join('')
   });

   return newFrase.join(' ')



}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let arrNum = numero.toString().split('').reverse().join('') * 1
  
   if (arrNum === numero) {
      return 'Es capicua'
   } else {
      return 'No es capicua'
   }


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let newStr = ""
   for (let letter = 0; letter < string.length; letter++) {
      if (string[letter] === 'a' || string[letter] === 'b' || string[letter] === 'c') {
         continue
      } else {
        newStr += string[letter]
      }      
   }
   return newStr
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   let newArr =  arrayOfStrings.sort((a, b) => a.length - b.length)
   return newArr
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArr = []

array1.forEach(element => {

   //método 1
   // if (array2.includes(element)) {
   //  newArr.push(element)  
   // }
 
   //método 2
   if (array2.some(value => value === element)) {
      newArr.push(element)
   } 
});


   return newArr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
