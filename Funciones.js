// function toCelsius(farenheit){
//     return (5/9)*(farenheit*2)
// }

// let value = toCelsius();
// console.log(value);

//Si se intenta invocar una función
//sin darle un argumento marcara un error,
//en este caso marca un NaN debido a que 
//no puede hacer la operación.

// function toCelsius(farenheit){
//     return (5/9)*(farenheit*2)
// }

// let value = toCelsius;
// console.log(value);

//Si no se le ponen los () a la declaración
//regresará la función como tal.

//toCelsius indica que regrese la función 
//como objeto, mientras que toCelsius() 
//indica que se regrese el resultado
//de la función.

function toCelsius(farenheit){
    return (5/9)*(farenheit*2)
}

//Las funciones se pueden utilizar en 
//todos los ámbitos como las variables.

let x = toCelsius(77);
let text = "The temperature is " + x + "Celsius"

//Es lo mismo que escribir de la siguiente manera.

let text1 = "The temperature is " + toCelsius(77) + "Celsius"

console.log(text);
console.log(text1);
