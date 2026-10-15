//Tarea 1: Sistema de calificaciones con funciones
//Cree una función que reciba una calificación numérica (0-100) y devuelva la letra correspondiente (A, B, C, D, F). Cree otra función que reciba un arreglo de calificaciones y devuelva el promedio. Solicite al usuario cuántas calificaciones desea ingresar, almacene cada una en un arreglo, y al final muestre: cada calificación con su letra, el promedio y la letra del promedio.

//Importamos readline para poder pedirle datos al usuario por consola.
import readline from 'readline';

//Creamos la interfaz que lee lo que el usuario escribe y muestra los mensajes en consola.
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Esta funcion recibe una nota y devuelve la letra que le corresponde segun el rango.
function obtenerLetra(nota) {
    //Si la nota es 90 o mas le toca la A, y asi vamos bajando por rangos hasta llegar a la F.
    if (nota >= 90) {
        return 'A';
    } else if (nota >= 80) {
        return 'B';
    } else if (nota >= 70) {
        return 'C';
    } else if (nota >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

//Esta funcion recibe el arreglo de notas y devuelve el promedio.
function calcularMedia(listaNotas) {
    //Creamos el acumulador que va a ir sumando todas las notas, inicia en 0.
    let acumulado = 0;
    //Recorremos el arreglo posicion por posicion y sumamos cada nota al acumulado.
    for (let i = 0; i < listaNotas.length; i++) {
        acumulado += listaNotas[i];
    }
    //El promedio es la suma entre la cantidad de notas que hay en el arreglo.
    return acumulado / listaNotas.length;
}

//Le preguntamos al usuario cuantas calificaciones va a ingresar.
entrada.question("¿Cuántas calificaciones desea ingresar? ", (respuesta) => {
    //Convertimos lo que escribio el usuario a numero entero.
    const cantidadNotas = parseInt(respuesta);

    //Validamos que sea un numero y que sea mayor que cero, si no es asi cerramos el programa.
    if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        console.log("Debe ingresar un número entero mayor que cero.");
        entrada.close();
        return;
    }

    //Creamos el arreglo donde se van a guardar las notas validas.
    const listaNotas = [];
    //Este contador lleva la cuenta de cuantas notas validas llevamos guardadas.
    let contadorNotas = 0;

    //Pedimos la primera nota, y como la funcion se llama a si misma, cada nota espera a que se responda la anterior.
    entrada.question(`Ingrese la calificación ${contadorNotas + 1} (0-100): `, function pedirNota(textoNota) {
        //Convertimos la nota ingresada a numero con decimales.
        const notaIngresada = parseFloat(textoNota);

        //Validamos que sea un numero y que este entre 0 y 100, si no, mostramos el error y no la guardamos.
        if (isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 100) {
            console.log("Calificación inválida. Debe ser un número entre 0 y 100.");
        } else {
            //Si es valida la guardamos en el arreglo y aumentamos el contador.
            listaNotas.push(notaIngresada);
            contadorNotas++;
        }

        //Si todavia faltan notas, volvemos a preguntar usando la misma funcion.
        if (contadorNotas < cantidadNotas) {
            entrada.question(`Ingrese la calificación ${contadorNotas + 1} (0-100): `, pedirNota);
        } else {
            //Si ya estan todas las notas, mostramos cada una con su letra.
            console.log("\nCalificaciones ingresadas:");
            for (let i = 0; i < listaNotas.length; i++) {
                const letraNota = obtenerLetra(listaNotas[i]);
                console.log(`Calificación ${i + 1}: ${listaNotas[i]} - Letra: ${letraNota}`);
            }

            //Calculamos el promedio con la funcion y buscamos la letra que le corresponde.
            const media = calcularMedia(listaNotas);
            const letraMedia = obtenerLetra(media);
            console.log(`\nPromedio: ${media.toFixed(2)} - Letra del promedio: ${letraMedia}`);

            //Cerramos la interfaz para que el programa termine.
            entrada.close();
        }
    });
});