//Declaramos una variable que contenga una cantidad de dinero en dólares estadounidenses para luego hacer la conversion a otras monedas 
let dolarEstadounidense = 100;

//Para convertir dolar estadounidense a euro multiplicamos el dolar por 0.92 para hacer la conversion
let euroConversion = dolarEstadounidense * 0.92;

//En este apartado hacemos la variable donde se guardara la conversion de dolar estadounidense a pesos salvadoreños que seria la moneda antigua 
let pesosSalvadoreños = dolarEstadounidense * 8.75; 

//Creamos la variable donde se almacenara nuestra conversion de dolar estadounidense a quetzal guatemalteco este se hace como las anteriores todo por mediante la multiplicacion  
let quetzalesGuatemaltecos = dolarEstadounidense * 7.80;

//Usamos console.log para mostrar todas las conversiones con su mensajes descrictivos 
//Tambien usaremos la funcion del toFixed(2) para que las conversiones solo los muestren dos decimales 
//Aplicamos la interpolacion de variable para mostrar en consola mejor y mas descrictiva la salida 
console.log(`Usted tiene $${dolarEstadounidense} dolares estadounidenses `);
console.log(`Se realizo con exito su conversion a euros: €`+ euroConversion.toFixed(2));
console.log(`Se realizo con exito su conversion a pesos salvadoreños: ₡`+ pesosSalvadoreños.toFixed(2));
console.log(`Se realizo con exito su conversion a quetzales guatemaltecos: Q`+quetzalesGuatemaltecos.toFixed(2));