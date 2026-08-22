//Declaramos una variable que contenga el radio de un circulo puede tener cualquier valor 
let radioCirculo = 25;

//Se declaro la variable perimetro circulo para poder darle espacio alrededor al ciculo mediante el calculo de su formula correspondida  
let perimetroCirculo = 2 * 3.14159 * radioCirculo;

//Se declaro la variable area con su formula para asi obtener ese espacio total dentro del ciculo 
let areaCirculo = 3.14159 * radioCirculo**2 

//Usamos console.log para mostrar todas las salidas con su mensaje descrictivo 
//Usamos la funcion toFixed(2) para que el resultado los muestre solo dos decimales 
console.log(`El radio de su circulo es de: `+radioCirculo);
console.log(`El perimetro de su ciculo es: `+perimetroCirculo.toFixed(2));
console.log(`La area de su circulo es de: `+areaCirculo.toFixed(2)); 