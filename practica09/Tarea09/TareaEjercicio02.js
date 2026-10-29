// Tarea 2: Funciones recursivas con figuras y menú
// Cree funciones recursivas para calcular lo siguiente: una que sume los primeros n números pares; otra que sume los primeros n números impares; y otra que calcule el n-ésimo término de la serie de Fibonacci. 
// Cree un menú con Switch para que el usuario elija la operación, luego ingrese el valor de n. 
// Muestre el resultado con mensajes descriptivos.

// Importo readline para pedir datos por consola
import readline from "node:readline";

//Creamos la interfaz que lee lo que el usuario escribe y muestra los mensajes en consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para sumar los primeros n pares
const sumaPares = (n, actual, total) => {
  // Caso base: si el contador supera a n, ya terminé
  if (actual > n) {
    console.log(`La suma de los primeros ${n} numeros pares es: ${total}`);
    return;
  }

  // Llamada recursiva: avanzo el contador y sumo el par actual (actual * 2)
  sumaPares(n, actual + 1, total + actual * 2);
};

// Función para sumar los primeros n impares
const sumaImpares = (n, actual, total) => {
  // Caso base
  if (actual > n) {
    console.log(`La suma de los primeros ${n} numeros impares es: ${total}`);
    return;
  }

  // Llamada recursiva: avanzo el contador y sumo el impar actual (actual * 2 - 1)
  sumaImpares(n, actual + 1, total + (actual * 2 - 1));
};

// Función para calcular el término n de Fibonacci
const fibonacci = (n, actual, anterior, siguiente) => {
  // Caso base: cuando llego a n, el valor está en "anterior"
  if (actual > n) {
    console.log(`El termino ${n} de la serie de Fibonacci es: ${anterior}`);
    return;
  }

  // Llamada recursiva: avanzo el contador y actualizo los valores de la serie
  fibonacci(n, actual + 1, siguiente, anterior + siguiente);
};

// Muestro el menú
console.log("===== MENU =====");
console.log("1. Suma de los primeros n numeros pares");
console.log("2. Suma de los primeros n numeros impares");
console.log("3. N-esimo termino de Fibonacci");

// Pido la opción y el valor de n al usuario
rl.question("Elija una opcion: ", (opcion) => {
  rl.question("Ingrese el valor de n: ", (valor) => {
    
    // Convierto el valor a número
    const n = parseFloat(valor);

    // Valido que sea un entero positivo
    if (!Number.isInteger(n) || n <= 0) {
      console.log("Ingrese un numero entero positivo valido.");
    } else {
      // Switch para llamar a la función según la opción
      switch (opcion) {
        case "1":
          sumaPares(n, 1, 0);
          break;
        case "2":
          sumaImpares(n, 1, 0);
          break;
        case "3":
          fibonacci(n, 1, 0, 1);
          break;
        default:
          console.log("Opcion no valida. Elija 1, 2 o 3.");
      }
    }

    // Cierro la consola
    rl.close();
  });
});