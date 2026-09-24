// Tarea 2: Clasificador de números con múltiples condiciones
// Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores 
// lógicos, determine y muestre:
// - Si los tres son iguales: "Los tres números son iguales"
// - Si los tres son diferentes: "Los tres números son diferentes"
// - Si exactamente dos son iguales: "Hay dos números iguales"
// - Además, indique cuál de los tres números es el mayor y cuál es el menor.
// - Si algún número es negativo, agregue el mensaje "Hay números negativos".

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Creamos la interfaz de lectura de datos y salida para que el usuario pueda ingresar sus datos y mostrarle en pantalla
const clasificacion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
//Le hacemos la pregunta al usuario para que ingrese el primer numero a evaluar
clasificacion.question("Ingrese el primer numero: ", (num) => {
//Se le vuelve a preguntar al usuario cual es su segundo numero a evaluar
    clasificacion.question("Ingrese el segundo numero: ", (num2) => {
//Se le vuelve a preguntar el tercer numero a evaluar que el usuario ingrese
        clasificacion.question("Ingrese el tercer numero: ", (num3) => {

            // Convertimos los datos de string a numeros enteros
            let a = parseInt(num);
            let b = parseInt(num2);
            let c = parseInt(num3);

            // Primero revisamos si los tres son iguales
            if (a === b && b === c) {
                console.log("Los tres números son iguales");
            } else {
                // Si no son los tres iguales revisamos si los tres son diferentes
                if (a != b && b != c && a != c) {
                    console.log("Los tres números son diferentes");
                } else {
                    console.log("Hay dos números iguales");
                }

                // Buscamos el numero mayor con el operador >= para que tambien funcione si hay empates
                if (a >= b && a >= c) {
                    console.log(`El numero mayor es: ${a}`);// Mostramos el valor mayor
                } else if (b >= a && b >= c) {
                    console.log(`El numero mayor es: ${b}`);//Mostramos el valor mayor
                } else {
                    console.log(`El numero mayor es: ${c}`);//Mostramos el valor mayor
                }

                // Buscamos el numero menor con el operador <= para que tambien funcione si hay empates
                if (a <= b && a <= c) {
                    console.log(`El numero menor es: ${a}`); //Mostramos cual de los numeros es el menor 
                } else if (b <= a && b <= c) {
                    console.log(`El numero menor es: ${b}`);// Mostramos cual de los numeros es el menor 
                } else {
                    console.log(`El numero menor es: ${c}`);//Mostramos cual de los numeros es el menor
                }
            }

            // Al final revisamos si hay numeros negativos con el operador ||
            if (a < 0 || b < 0 || c < 0) {
                console.log(`Hay números negativos`); //Aqui se le mostrara al usuario si hay numeros negativos dependiendo si se cumple la condicion 
            }

            // Cerramos el modulo
            clasificacion.close();
        });
    });
});