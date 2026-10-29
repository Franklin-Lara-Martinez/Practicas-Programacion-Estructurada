// Tarea 3: Funciones recursivas para manejo de cadenas
// Cree las siguientes funciones recursivas: una que reciba una cadena y devuelva la cantidad de vocales; 
// otra que reciba una cadena y devuelva la cadena invertida; 
// y otra que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés). 
// Solicite una palabra o frase al usuario y muestre los tres resultados.

// Importo readline para pedir datos por consola
import readline from "node:readline";

//Creamos la interfaz que lee lo que el usuario escribe y muestra los mensajes en consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función recursiva que cuenta las vocales
const contarVocales = (cadena) => {
    // Caso base: si la cadena está vacía, devuelve 0
    if (cadena.length === 0) {
        return 0;
    }

    // Obtener la primera letra
    let letra = cadena[0].toLowerCase();

    // Comprobar si la primera letra es una vocal
    if ("aeiou".includes(letra)) {
        // Llamada recursiva sumando 1
        return 1 + contarVocales(cadena.substring(1));
    } else {
        // Llamada recursiva sin sumar
        return contarVocales(cadena.substring(1));
    }
}

// Función recursiva que invierte una cadena
const invertirCadena = (cadena) => {
    // Caso base: una cadena vacía o de una letra ya está invertida
    if (cadena.length <= 1) {
        return cadena;
    }

    // Llamada recursiva
    return invertirCadena(cadena.substring(1)) + cadena[0];
}

// Función recursiva que determina si una cadena es palíndromo
const esPalindromo = (cadena) => {
    // Convertir a minúsculas y eliminar espacios
    let texto = cadena.toLowerCase().replace(/\s/g, "");

    // Caso base: si tiene 0 o 1 caracteres, es palíndromo
    if (texto.length <= 1) {
        return true;
    }

    // Si la primera y última letra son diferentes, no es palíndromo
    if (texto[0] !== texto[texto.length - 1]) {
        return false;
    }

    // Llamada recursiva: comprobar el interior de la cadena
    return esPalindromo(texto.substring(1, texto.length - 1));
}

// Solicitar una palabra o frase
rl.question("Ingrese una palabra o frase: ", (cadena) => {

    // Llamar a las funciones recursivas
    let vocales = contarVocales(cadena);
    let invertida = invertirCadena(cadena);
    let palindromo = esPalindromo(cadena);

    // Mostrar los resultados
    console.log("\n=== RESULTADOS ===");
    console.log("Cantidad de vocales: " + vocales);
    console.log("Cadena invertida: " + invertida);

    if (palindromo) {
        console.log("La cadena ES un palíndromo.");
    } else {
        console.log("La cadena NO es un palíndromo.");
    }

    // Cerrar la interfaz
    rl.close();
});