// Tarea 4: Información completa de fecha y hora
// Obtenga la fecha y hora actual. Muestre en formato: "Hoy es 26/8/2026 y son las 9:15:30"

let fechaActual = new Date(); //creamos la variable y importamos el metodo de fecha para poder obtener la fecha y hora actual

let dia = fechaActual.getDate(); // Con este metodo obtenemos el dia actual del mes 

let mes = fechaActual.getMonth() + 1; // Con este metodo obtenemos el mes actual del año, sumamos 1 porque los meses empiezan desde 0

let anio = fechaActual.getFullYear(); // con este metodo obtenemos el año actual

let hora = fechaActual.getHours(); // Con esta variable tenemos la hora actual del dia 

let minutos = fechaActual.getMinutes(); // En esta variable obtendremos los minutos actuales de la hora

let segundos = fechaActual.getSeconds(); // En esta variable obtendremos los segundos actuales de la hora

// Mostramos en consola la fecha y hora actual en el formato solicitado
console.log(`Hoy es ${dia}/${mes}/${anio} y son las ${hora}:${minutos}:${segundos}`);