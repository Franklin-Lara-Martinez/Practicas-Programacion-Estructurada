// Tarea 2: Fábrica de funciones
// Cree una función de orden superior llamada crearMultiplicador que reciba un número (el factor) 
// y devuelva una nueva función que multiplique cualquier número por ese factor. 
// Luego, cree un "duplicador" (factor 2) y un "triplicador" (factor 3), y pruebe ambas funciones con un número para mostrar los resultados.

// Aquí creo mi función de orden superior. 
// Recibe el factor y devuelve otra función.
const crearMultiplicador = (factor) => {
    // Esta es la función que voy a devolver. Recibe un número y lo multiplica por el factor.
    return (numero) => numero * factor;
};

// Aquí creo mi "duplicador" pasándole el factor 2.
const duplicador = crearMultiplicador(2);

// Aquí creo mi "triplicador" pasándole el factor 3.
const triplicador = crearMultiplicador(3);

// Primero, creo mi arreglo con los números que voy a probar.
const numeros = [5, 10, 15];

// Aquí uso map y le paso mi función 'duplicador' como CALLBACK para que procese el arreglo.
// map se encarga de ejecutar 'duplicador' por cada número.
const resultadosDuplicados = numeros.map(duplicador);

// Aquí pasa lo mismo: le paso mi función 'triplicador' como CALLBACK a map.
const resultadosTriplicados = numeros.map(triplicador);

// Finalmente, imprimo los resultados en consola de manera clara.
console.log("--- Resultado ---");

// Prueba directa
console.log("El duplicador de 8 es: " + duplicador(8));
console.log("El triplicador de 8 es: " + triplicador(8));

// Prueba del arreglo (Aquí es donde usé los callbacks en el map)
console.log("Resultados duplicados del arreglo: " + resultadosDuplicados);
console.log("Resultados triplicados del arreglo: " + resultadosTriplicados);