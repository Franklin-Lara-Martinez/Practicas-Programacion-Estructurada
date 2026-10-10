// Tarea 1: Adivinar el número secreto (WHILE)
// Genere un número secreto entre 1 y 50 usando Math.floor(Math.random() * 50) + 1.
// Usando un bucle WHILE, solicite al usuario adivinar el número.
// En cada intento, indique si el número es mayor o menor que el secreto.
// Cuente los intentos y muéstrelos al final.

// Importar readline-sync para entrada de datos síncrona.
const readlineSync = require("readline-sync");
//Creamos una variable para almacenar el numero secreto.
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
//Creamos una variable para contar cada intento del usuario, la inicializamos en 0.
let intentos = 0;

//Usamos un bucle While con la condicion en true para que se repita la pregunta al usuario hasta que adivine el numero secreto.
while (true) {
  //Creamos una variable para almacenar el numero ingresado por el usuario y se le pide que ingrese un numero entre (1 y 50).
  let adivinanza = parseInt(
    readlineSync.question("Adivina el número secreto (entre 1 y 50): "),
  );
  //En cada vuelta del bucle la variable intentos aumenta en 1 para mostrarle al usuario al final cuantos intentos realizo para adivinar el numero secreto.
  intentos++;

  //Creamos estas condiciones para mostrarle un mensaje al usuario si el numero ingresado es mayor o menor al numero secreto.
  //Si adivino el numero secreto se le mostrara un mensaje de felicitaciones y cuantos intentos realizo para adivinarlo.
  if (adivinanza === numeroSecreto) {
    console.log(
      `\nFelicidades adivinaste el numero secreto ${numeroSecreto} en ${intentos} intentos`,
    );
    break; //Usamos break para salir del bucle while cuando el usuario adivine el numero
  } else if (adivinanza < numeroSecreto) {
    console.log(
      `El numero secreto es mayor que ${adivinanza} intente de nuevo`,
    );
  } else {
    console.log(
      `El numero secreto es menor que ${adivinanza} intente de nuevo`,
    );
  }
}
