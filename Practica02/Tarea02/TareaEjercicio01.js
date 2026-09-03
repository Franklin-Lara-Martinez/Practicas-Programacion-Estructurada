// Tarea 1: Procesar nombre de usuario
// Solicite al usuario su nombre completo. Convierta el nombre a mayúsculas, extraiga las primeras 4 letras y luego conviértalo a minúsculas. Muestre todos los resultados.

let nombreUsuario = "Franklin Jose Lara Martinez"; // Simulación de entrada del usuario

// Convertir el nombre a mayúsculas
let nombreMayusculas = nombreUsuario.toUpperCase();

//En esta linea de codigo se extraen las primeras 4 letras del nombre en mayúsculas
let primerasCuatroLetras = nombreMayusculas.slice(0, 4);

//En esta linea convertimos las primeras 4 letras a minusuclas 
let primerasCuatroLetrasMinusculas = primerasCuatroLetras.toLowerCase();

// Mostrar todos los resultados que los pide el ejercicio 
console.log(`Nombre completo en mayusculas: ${nombreMayusculas}. \n Primeras 4 letras en mayusculas: ${primerasCuatroLetras}. \n Primeras 4 letras en minusculas: ${primerasCuatroLetrasMinusculas}` );