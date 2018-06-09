/* Ejercicio 1
Escriba una función 'computeAverageLengthOfWords' 
que recibe dos strings y devuelve el promedio de la longitud 
de ambos strings. */ 

  //arrow function
const computeAverageLengthOfWord = ((word1, word2) => {
return (word1.length + word2.length)/2;
  });
  console.log(computeAverageLengthOfWords('hola', 'chao'));

/* Ejercicio 2 
Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor 
según el entero dado, dentro del arreglo dado.*/

function getNthElement(array, n) {
  for (let i = 0; i < array.length; i++){
    if (array.indexOf(n) === i);
      return array [n];
    }
  };
  console.log(getNthElement([1, 3, 5, 7], 2));

  //arow function
const getNthElement = ((array, n) => {
  for (let i = 0; i < array.length; i++){
    if (array.indexOf(n) === i);
      return array [n];
    }
});
console.log(getNthElement([1, 3, 5, 7], 2));