// Tarea 1: Factorial de un número
// Solicite un número entero positivo al usuario.
// Usando un bucle FOR, calcule y muestre su factorial.
// Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

// Importar el modulo readline
const readline = require("readline");

// Crear interfaz de lectura
const factorial = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Se le hace la pregunta al usuario para ingresar un numero positivo entero.
factorial.question("Ingrese un numero entero positivo: ", (num) => {
  //Convertimos la variable "num" string que pase a ser de tipo numero que tome solo numeros enteros.
  let numPositivo = parseInt(num);

  //Usamos esta condicion if para validar que el usuario no ingrese numeros negativos y se cierre el programa.
  //Verificamos que el usuario ingrese un numero y no texto de lo contrario se cerrara el programa.
  if (numPositivo <= 0 || isNaN(numPositivo)) {
    console.log("Su numero no es valido, tiene que ser un numero positivo."); //Le mostramos el mensaje detallado al usuario antes de cerrar el programa.
    factorial.close(); //Con esta linea cerramos el modulo.

    return; // Con esto le decimos al programa que no siga avanzando y corte la ejecucion.
  }

  //Creamos la variable "resultado" que inicie en 1 para ir multiplicando el numero cuando la variable iteradora aumente
  let resultado = 1;
  //Esa variable "operacion" la creamos para tener una salida mas detallada lo que hace es ir sumando al numero que va aumentando de la variable iteradora "i" le suma "X"
  //para que la salida se muestre mejor y el usuario puede entender como se hace lo del numero factorial.
  let operacion = ``;

  //Con este bucle for recorremos desde 1 hasta el numero que ingreso el usuario, multiplicando en cada vuelta
  for (let i = 1; i <= numPositivo; i++) {
    //En esta linea vamos acumulando el resultado, multiplicando lo que ya llevabamos por el numero actual "i"
    resultado = resultado * i;
    //Aqui vamos armando el texto de la operacion, agregando el numero actual "i" a la cadena
    operacion = operacion + i;

    //Con esta condicion evitamos que quede una "X" de mas al final de la operacion, solo la agregamos si no es el ultimo numero
    if (i < numPositivo) {
      operacion = operacion + ` X `;
    }
  }

  //Mostramos en consola el numero ingresado, la operacion completa armada y el resultado final del factorial
  console.log(`${numPositivo}! = ${operacion} = ${resultado}`);

  //Cerramos la interfaz de readline para que el programa termine correctamente
  factorial.close();
});
