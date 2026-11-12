// Tarea 1: Acumulación con reduce
// Cree un arreglo con las notas de un estudiante (por ejemplo: 8, 7, 9, 6, 10). 
// Utilice el método reduce para calcular el promedio de las notas. 
// Muestre el resultado en consola con 2 decimales.

// Primero, creo mi arreglo con las 5 notas del estudiante
const notasEstudiante = [8, 7, 9, 6, 10];

// Aquí creo mi función de orden superior. 
// Recibe un callback y devuelve otra función.
const crearCalculadoraPromedio = (callbackReduccion) => {
    
    // Esta es la función que voy a devolver. Recibe el arreglo de notas.
    return (arregloNotas) => {
        
        // Uso reduce y le paso mi callback para que vaya sumando todas las notas.
        // El "0" es para que empiece a contar desde cero.
        const sumaTotal = arregloNotas.reduce(callbackReduccion, 0);
        
        // Saco el promedio dividiendo la suma total entre la cantidad de notas.
        const promedio = sumaTotal / arregloNotas.length;
        
        return promedio;
    };
};

// Este es mi callback. Es una función flecha que solo se encarga de sumar.
const sumarNotas = (acumulador, nota) => acumulador + nota;

// Ejecuto mi función de orden superior pasándole el callback para crear la calculadora.
const procesarPromedio = crearCalculadoraPromedio(sumarNotas);

// Ahora le paso mi arreglo de notas para obtener el promedio final.
const promedioFinal = procesarPromedio(notasEstudiante);

// Finalmente, imprimo los resultados en consola de manera clara.
console.log("--- Resultado ---");
console.log("El promedio final del estudiante es: " + promedioFinal.toFixed(2));