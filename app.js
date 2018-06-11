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

/* Ejercicio 7
Escriba una función llamada "findShortestWordAmongMixedElements".
Dado un array, "findShortestWordAmongMixedElements" devuelve 
la cadena más corta dentro del array dado. 
Notas:
Si hay vínculos, debería devolver el primer elemento que aparezca en el array dado.
Espere que el array tenga otros valores además de las cuerdas.
Si el array dado está vacío, debería devolver una cadena vacía.
Si el array dado no contiene cadenas, debería devolver una cadena vacía.*/

function findShortestWordAmongMixedElements(arr) {
  
}

/* Ejercicio 8
Escribe una función llamada calculateBillTotal.

Dado el pre impuesto y la cantidad antes de propina de una comida, calculateBillTotal devuelve la cantidad total debida después de impuestos y propina.

Notas:

Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
NO incline el impuesto sobre las ventas, solo sobre la cantidad de propina. */

function calculateBillTotal(preTaxAndTipAmount) {
  let taxPercentage = preTaxAndTipAmount % 9.5;
  let SunTax = preTaxAndTipAmount+taxPercentage;
  let tipPercentage = SunTax%15;
  let tipSunTax= tipPercentage+SunTax
 
  return tipSunTax;
}

/* ejercicio 9
Escribe una función llamada convertScoreToGrade.
Dada una puntuación, convertScoreToGrade devuelve una cadena 
que representa el grado de letra correspondiente a la puntuación 
dada.
Notas:
(100 - 90) -> 'A'
(89 - 80) ->' B '
(79 - 70) -> 'C'
(69 - 60) -> 'D'
(59 - 0) -> 'F'
Si la puntuación dada es mayor que 100 o menor que 0, debe 
devolver 'PUNTUACION INVALIDA' */

function convertScoreToGrade(score) {
  if( 0 <= score && 59 >= score){
    return 'F';
  }else if (60 <= score &&  69 >= score ) {
    return 'D';
  }else if(70 <= score  &&  79 >= score){
    return 'C';
  }else if(80 <= score && 89 >= score ){
   return 'B';
  }else if(90 <= score && 100 >= score){
  return 'A';
  }else{return 'Invalido'}
};