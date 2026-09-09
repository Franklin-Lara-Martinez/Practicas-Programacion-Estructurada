// Tarea 2: Comparar calificaciones
// Solicite al usuario dos calificaciones (0-100).
// Compare cuál es la más alta. Si son iguales, indíquelo.
// Muestre un mensaje descriptivo con el resultado.

//Importamos el módulo readline para ingresar datos de entrada y salida para el usuario.
const readline = require("readline");

//creamos la interfaz de readline para leer la entrada y mostrar la salida del usuario en consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Hacemos la pregunta al usuario para que ingrese dos notas, que necesita comparar entre sí.
rl.question("Ingrese su primer calificacion (0-100): ", function (cal1) {
  rl.question("Ingrese su segunda calificacion(0-100): ", function (cal2) {
    //Como podemos ver anteriormente el usuario ingresa un valor que entra como tipo string.
    //y para poderlo comparar necesitamos convertirlo en un tipo float para poder hacer la comparación.
    let primeraCalificacion = parseFloat(cal1);
    let segundaCalificacion = parseFloat(cal2);

    //Aquí en esta condición verificamos que la nota esté entre el intervalo de notas permitidas tales como menos de cero y más de 100.
    //utilizamos el rl.close(); para cerrar la interfaz de readline y el return sirve para completar la validación y no deja que el código continúe ejecutándose.
    if (
      primeraCalificacion < 0 ||
      primeraCalificacion > 100 ||
      segundaCalificacion < 0 ||
      segundaCalificacion > 100
    ) {
      console.log(`Alguna de las calificaciones no es válida, ingrese un valor entre 0 y 100`);
      rl.close();
      return;
    }

    //Ya una vez validadas las calificaciones pasamos a comparar cuál nota es la mayor y mostramos un mensaje descriptivo al usuario.
    // y si son iguales mostrar un mensaje que indique que ambas calificaciones son iguales.
    if (primeraCalificacion > segundaCalificacion) {
      console.log(`Su calificacion mas alta es la primera: ${primeraCalificacion}`);
    } else if (segundaCalificacion > primeraCalificacion) {
      console.log(`Su calificacion mas alta es la segunda: ${segundaCalificacion}`);
    } else {
      console.log(`Sus calificaciones son iguales: primera calificacion = ${primeraCalificacion} Su segunda calificacion = ${segundaCalificacion}`);
    }
    //con este cerramos la interfaz de readline para que no quede abierta y el programa pueda terminar correctamente.
    rl.close();
  });
});
