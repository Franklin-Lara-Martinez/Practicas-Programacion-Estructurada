//Ejercicio 2: Conversión de Temperaturas
//Declare una variable con una temperatura en grados Fahrenheit. Conviértala a grados
//Celsius usando la fórmula correspondiente y muestre el resultado redondeado a dos
//decimales.

let fahrenheit = 70;
let conversion = (fahrenheit - 32) * 5 / 9;

console.log(`La temepratura en grados Celsius es; `+conversion.toFixed(2));
