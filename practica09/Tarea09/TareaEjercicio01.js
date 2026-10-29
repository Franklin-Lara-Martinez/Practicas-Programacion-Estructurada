// Tarea 1: Funciones recursivas para cálculos matemáticos
// Cree una función recursiva que calcule el factorial de un número entero positivo. 
// Cree otra función recursiva que calcule la potencia de una base elevada a un exponente sin usar el operador **. 
// Cree una tercera función recursiva que sume todos los números desde 1 hasta n. 
// Solicite al usuario un número, y muestre el factorial, la potencia (usando ese número como base y como exponente) y la suma hasta ese número.

//Importamos readline para poder pedirle datos al usuario por consola.
import readline from "node:readline";

//Creamos la interfaz que lee lo que el usuario escribe y muestra los mensajes en consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// FUNCIÓN FACTORIAL
// Para el factorial usé un acumulador (resultado) y un contador (actual) que empieza en 1.
const factorial = (num, actual, resultado) => {
  // Mi caso base: si el contador "actual" supera al número que pidió el usuario, ya terminé.
  if (actual > num) {
    // Hice este for solo para que en pantalla se vea bonito el ejemplo (5 X 4 X 3...)
    let camino = "";
    for (let i = num; i >= 1; i--) {
      camino += camino === "" ? `${i}` : ` X ${i}`;
    }
    console.log(`Factorial: ${num}! = ${camino} = ${resultado}`);
    return; // Retorno para que la función se detenga aquí
  }

  // Llamada recursiva: me vuelvo a llamar, avanzo el contador (+1) y multiplico el resultado por el número actual
  factorial(num, actual + 1, resultado * actual);
};

// FUNCIÓN POTENCIA
// Para la potencia lo hice igual, con un contador, pero sin usar el **
const potencia = (base, actual, exponente, resultado) => {
  // Mi caso base: cuando el contador supera al exponente, ya terminé.
  if (actual > exponente) {
    console.log(`Potencia: ${base} elevado a ${exponente} es: ${resultado}`);
    return; // Retorno para que la función se detenga aquí
  }

  // Llamada recursiva: avanzo el contador y voy multiplicando el resultado por la base
  potencia(base, actual + 1, exponente, resultado * base);
};

// FUNCIÓN SUMA TOTAL
// Para la suma, el contador va sumando de 1 en 1 hasta llegar a "n"
const sumaTotal = (n, actual, totalSuma) => {
  // Mi caso base: cuando el contador pasa de "n", imprimo el total y termino.
  if (actual > n) {
    console.log(`Suma total de 1 hasta ${n}: ${totalSuma}`);
    return;
  }

  // Llamada recursiva: avanzo el contador y le sumo el número "actual" a mi total
  sumaTotal(n, actual + 1, actual + totalSuma);
};

// INICIO DEL PROGRAMA

// Le pido al usuario que escriba un número
rl.question("Ingrese un numero: ", (numero) => {
  // Lo paso a número, porque todo lo que escribe el usuario entra como texto
  numero = parseFloat(numero);

  // Reviso que sea un número entero y positivo (mayor a 0)
  if (Number.isInteger(numero) && numero > 0) {
    // Llamo a mis 3 funciones, les paso el número y los valores para empezar a contar
    factorial(numero, 1, 1);
    potencia(numero, 1, numero, 1);
    sumaTotal(numero, 1, 0);

    // Cierro la consola al final de todo.
    rl.close();
  } else {
    // Si escribió letras, decimales o un número negativo, le aviso que está mal
    console.log("Ingrese un numero valido");
    rl.close();
  }
});
