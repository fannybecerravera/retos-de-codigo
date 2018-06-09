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

/* Ejercicio 3
Escribe una función llamada convertDoubleSpaceToSingle.
Dada una cadena, convertDoubleSpaceToSingle devuelve la 
cadena pasada en cadena con todos los espacios dobles 
convertidos a espacios simples. */

function convertDoubleSpaceToSingle(str) {
  let arrayStr = str.split("  ").join(" ");
	return arrayStr;
};
console.log(convertDoubleSpaceToSingle("string  with  double  spaces"));

//arrow function

const convertDoubleSpaceToSingle = (str) => {
	let arrayStr = str.split("  ").join(" ");
	return arrayStr;
};
console.log(convertDoubleSpaceToSingle("string  with  double  spaces"));

/* Ejercicio 4
 */

function areValidCredentials(name, password) {
  let value1 = name.length;
  let value2 = password.length;
  if(3 < value1 && 8 <= value2){
    return true;
  }else {
    return false;
  }
}
console.log(areValidCredentials('fanny', 'holamundo'));

// arrow function

const areValidCredentials = (name, password) => {
  let value1 = name.length;
  let value2 = password.length;
  if(3 < value1 && 8 <= value2){
    return true;
  }else {
    return false;
  }
};
console.log(areValidCredentials('fanny', 'holamundo'));

/* Ejercicio 5
Dada una lista de números enteros no negativos y una suma 
objetivo, encuentre un par de números que sumen a la suma 
objetivo. */

function findPairForSum(array, number) {

}

/* Ejercicio 6
 Escriba una función llamada "filterOddElements".

Dado un array de números,"filterOddElements" devuelve un array 
que contiene sólo los números impares del array dado.*/

function filterOddElements(arr) {
  // your code here
  let output = arr.filter(number => number%2 !== 0);
  return output;
}
output = filterOddElements([1, 2, 3, 4, 5]);
console.log (output);

//arrow function

const filterOddElements = (arr) => {
  let output = arr.filter(number => number%2 !== 0);
  return output;
};
output = filterOddElements([1, 2, 3, 4, 5]);
console.log (output);



