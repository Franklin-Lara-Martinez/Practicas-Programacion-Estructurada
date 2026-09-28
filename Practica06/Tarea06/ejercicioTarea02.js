// Tarea 2: Números primos
// Solicite un número N. Usando un bucle FOR, determine si el número es primo o no.
// Un número primo solo es divisible entre 1 y sí mismo. Muestre el resultado. Además, muestre todos los números primos desde 1 hasta N.

// Importar el modulo readline
const readline = require("readline");

// Crear interfaz de lectura
const numeros = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Hacemos la pregunta al usuario de que ingrese un numero cualquiera.
numeros.question("Ingrese un numero: ", (num) => {
  //Convertimos la variable "num" de string a que solo tome numeros enteros.
  let N = parseInt(num);

  //Con el if validamos que el usuario ingrese un numero mayor a 0 y no texto, de lo contrario se cierra el programa.
  if (N <= 0 || isNaN(N)) {
    console.log("Su numero no es valido, tiene que ser un numero positivo."); //Le mostramos el mensaje detallado al usuario antes de cerrar el programa.
    numeros.close(); //Con esta linea cerramos el modulo.

    return; // Con esto le decimos al programa que no siga avanzando y corte la ejecucion.
  }

  //Le mostramos al usuario el titulo de lo que va a ver a continuacion.
  console.log(`Los numeros primos hasta ${N} son:`);

  //Recorremos cada numero desde 1 hasta N, para revisar si cada uno es primo.
  for (let actual = 1; actual <= N; actual++) {
    //El contador se crea aqui, para cada numero nuevo que probamos, y arranca en 0 cada vez.
    let contador = 0;

    //Este bucle interno cuenta cuantos numeros dividen exacto al numero "actual".
    for (let i = 1; i <= actual; i++) {
      //Si el resto de la division da 0, quiere decir que "i" divide exacto a "actual".
      if (actual % i === 0) {
        contador = contador + 1;
      }
    }

    //Si el numero tiene exactamente 2 divisores (el 1 y el mismo), entonces es primo.
    if (contador === 2) {
      console.log(`El numero ${actual} es primo`);
    } else {
      //De lo contrario se mostraran los numeros que no son primos desde 1 hasta "N".
      console.log(`El numero ${actual} no es primo`);
    }
  }

  //Cerramos la interfaz de readline despues de que termine todo el bucle, para que el programa finalice correctamente.
  numeros.close();
});
