// Tarea 3: Promedio de calificaciones
// Solicite al usuario cuántas calificaciones desea ingresar. 
// Usando un bucle FOR y readline, solicite cada calificación, acumule la suma y al final calcule y muestre el promedio.
//  Además, muestre la calificación más alta y la más baja ingresada.

// Importar el modulo readline
const readline = require("readline");

// Crear interfaz de lectura
const calificacion = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

calificacion.question("Ingrese cuantas califaciones desea ingresar: ", async (cantidad) => {
    //Con esto convertimos la variable "cantidad" string a que tome solo numeros enteros que ingrese el usuario.
    let notaCantidad = parseInt(cantidad);

      //Con el if hacemos dos validaciones una que el numero ingresado no sea negativo y la otra que el usuario ingreso un numero y no texto.
  if (notaCantidad <= 0 || isNaN(notaCantidad)) {   // <-- ARREGLO 2: cambiado < por <= para rechazar tambien el 0
    console.log("Ingrese una cantidad de notas validas."); //Le mostramos el mensaje detallado al usuario antes de cerrar el programa.
     calificacion.close(); //Con esta linea cerramos el modulo.

    return; // Con esto le decimos al programa que no siga avanzando y corte la ejecucion.
  }

  //Creamos la variable acumuladora "sumaTotal" para sumar todas las notas.
  let sumaTotal = 0;

  //En esta variable guardamos la nota mas alta y lo iniciamos en -1 para que toda nota lo supere y lo reemplace aunque sea cero.
  let notaMaxima = -1;
  //En esta otra variable guardamos la nota minima y la iniciamos en 11 para que la condicion se cumpla y vaya bajando el numero asi obteniendo cual fue la nota mas baja.
  let notaMinima = 11;

  //Creamos esta funcion para que el bucle for espere al usuario para responder la pregunta.
  //Es como que le digamos al bucle que le prometemos que le daremos la respuesta pero que no espere y asi sucesivamente.
  function preguntar(texto){
    return new Promise(resolve => calificacion.question(texto, resolve));
  }
  //Con el ciclo for vamos a recorrer hasta la cantidad de notas que ingrese el usuario.
  for (let i = 1; i <= notaCantidad; i ++){

    //Declaramos esta variable para que se encargue siempre de la pregunta de las notas y asi llamemos a la funcion.
    //Utilizamos el "await" para que resolver le mande la pregunta y se guarda y el bucle puede continuar.
    let notaUsuario = await preguntar(`Ingrese la nota ${i}: `);
        //Aqui convertimos lo de las notas string la pasamos a que puedan tomar notas con decimales.
        notaUsuario = parseFloat(notaUsuario);

        //Aqui evaluamos que cada nota ingresada por el usuario no sea texto, ni una nota menor que cero, ni una nota mayor que 10.
      if (isNaN(notaUsuario) || notaUsuario < 0 || notaUsuario > 10){
            console.log("Ingrese una nota entre 0 y 10"); // <-- ARREGLO 1: mensaje corregido para que coincida con la validacion (0 a 10)

            calificacion.close(); //Con esto cerramos el modulo.

            return; //Con return cerramos todo el programa para que no siga avanzando.
        }
        //Con este if vamos reemplazando cada nota a evaluar para asi que al final se guarde la nota mas mayor de todas las notas ingresadas.
         if (notaUsuario > notaMaxima){
            notaMaxima = notaUsuario;
        }
        //Con este if vamos reemplazando cada nota a evaluar para asi que cuando evalue cada nota se vaya reemplazando y solo quede guardada la nota menor.
        if (notaUsuario < notaMinima){
            notaMinima = notaUsuario
        }
        //Hacemos la suma total de todas las notas.
     sumaTotal = sumaTotal + notaUsuario;
  }
 //Con la suma anterior hacemos el proceso para obtener el promedio.
  let promedio = sumaTotal / notaCantidad;
  //Le mostramos al usuario el promedio de sus notas y le indicamos cual fue su nota mayor y menor.
  console.log(`\nEl promedio de sus notas es: ${promedio.toFixed(1)}\nLa nota mayor fue:${notaMaxima}\nLa nota menor fue: ${notaMinima}`);

  //Cerramos la interfaz de readline para que el programa termine correctamente
  calificacion.close();

});