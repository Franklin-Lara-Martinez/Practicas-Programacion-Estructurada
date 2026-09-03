// Tarea 3: Calcular edad y años de experiencia
// Solicite al usuario su año de nacimiento. Obtenga el año actual, calcule su edad y muestre: "Tu edad aproximada es: X años."

let anioNacimiento = 2007; //Ponemos el dato del nacimiento del usuario para calcular su edad 

let fechaActual = new Date(); //creamos la variable y importamos el metodo de fecha para poder obtener el año actual

let anioActual = fechaActual.getFullYear(); //Con el metodo getFullYear obtenemos el año actual y poder calcular la edad del usuario 

let calculoEdad = anioActual - anioNacimiento; //En esta linea de codigo calculamos la edad del usuario restando el año actual con el año de nacimiento

//Mostramos todas las salidas que los pide el enunciado del ejercicio 
console.log(`Tu edad aproximada es: ${calculoEdad} años.`);d