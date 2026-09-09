// Tarea 1: Validar número positivo, negativo o cero
// Solicite un número al usuario usando readline. Verifique si es positivo, negativo o cero.
// Muestre un mensaje que indique el resultado: "El número es positivo", "El número es negativo" o "El número es cero".

//Importamos el módulo readline para ingresar datos de entrada y salida para el usuario.
const readline = require("readline");

//Creamos la interfaz de readline para leer la entrada y mostrar la salida del usuario en consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Preguntamos al usuario que ingrese un número para validar si es positivo, negativo o cero.
rl.question("Ingrese un numero: ", function (num) {

    //Aquí convertimos el número tipo string a tipo float para poder hacer la comparación del número ingresado por el usuario.
    let PrimerNumero = parseFloat(num);

    //Aquí en la siguiente estructura de control verificamos el número ingresado del usuario y mostramos
    //si el número es positivo, negativo o cero.
    if (PrimerNumero > 0) {
        //Podemos ver que en cada apartado se nota una salida diferente para el usuario que dependerá cuál mensaje se mostrará en consola,
        //dependiendo cuál de las condiciones se cumple.
        console.log("El número es positivo");
    } else if (PrimerNumero < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }
    rl.close();
});