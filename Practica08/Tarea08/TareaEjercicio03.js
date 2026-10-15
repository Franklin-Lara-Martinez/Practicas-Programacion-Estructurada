//Tarea 3: Funciones para manejo de cadenas
//Cree las siguientes funciones: una que reciba una cadena y devuelva la cantidad de vocales; otra que reciba una cadena y devuelva la cadena invertida; y otra que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés). Solicite una palabra o frase al usuario y muestre los tres resultados.

//Importamos readline para poder pedirle datos al usuario por consola.
import readline from 'readline';

//Creamos la interfaz que lee lo que escribe el usuario y muestra los mensajes en consola.
const interfazLectura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Esta funcion recibe un texto y devuelve cuantas vocales tiene.
function totalVocales(texto) {
    //Guardamos todas las vocales (en minuscula y mayuscula) para comparar cada letra contra ellas.
    const listaVocales = 'aeiouAEIOU';
    //Creamos el contador que va a sumar cada vocal que encontremos, inicia en 0.
    let cantidad = 0;
    //Recorremos el texto letra por letra.
    for (let i = 0; i < texto.length; i++) {
        //Si la letra actual esta dentro de las vocales, sumamos 1 al contador.
        if (listaVocales.includes(texto[i])) {
            cantidad++;
        }
    }
    //Devolvemos el total de vocales encontradas.
    return cantidad;
}

//Esta funcion recibe un texto y lo devuelve al reves.
function voltearTexto(texto) {
    //Separamos el texto en un arreglo de letras, lo damos vuelta y lo volvemos a unir en un solo texto.
    return texto.split('').reverse().join('');
}

//Esta funcion recibe un texto y devuelve true si es palindromo y false si no lo es.
function verificarPalindromo(texto) {
    //Quitamos todo lo que no sea letra o numero (espacios, comas, etc.) y pasamos todo a minuscula para comparar parejo.
    const textoLimpio = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //Damos vuelta el texto ya limpio usando la funcion que hicimos arriba.
    const textoVolteado = voltearTexto(textoLimpio);
    //Si el texto limpio es igual a su version al reves, es palindromo.
    return textoLimpio === textoVolteado;
}

//Le pedimos al usuario una palabra o frase.
interfazLectura.question("Ingrese una palabra o frase: ", (textoUsuario) => {
    //Llamamos a cada funcion con lo que escribio el usuario y guardamos los resultados.
    const totalVocalesTexto = totalVocales(textoUsuario);
    const textoAlReves = voltearTexto(textoUsuario);
    //Si es palindromo guardamos "sí", si no, "no", para mostrarlo en el mensaje.
    const respuestaPalindromo = verificarPalindromo(textoUsuario) ? "sí" : "no";

    //Mostramos los tres resultados.
    console.log(`Cantidad de vocales: ${totalVocalesTexto}`);
    console.log(`Cadena invertida: ${textoAlReves}`);
    console.log(`¿Es palíndromo?: ${respuestaPalindromo}`);

    //Cerramos la interfaz para que el programa termine.
    interfazLectura.close();
});