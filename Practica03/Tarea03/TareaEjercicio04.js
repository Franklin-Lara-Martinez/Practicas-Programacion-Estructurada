// Tarea 4: Validar requisitos de empleado
// Solicite nombre, edad y años de experiencia. 
// Valide que la edad sea mayor a 18 Y que la experiencia sea mayor a 0. 
// Si cumple ambas condiciones, muestre "Candidato válido". Si no cumple, muestre "No cumple con los requisitos".

//Importamos el módulo readline para ingresar datos de entrada y salida para el usuario.
const readline = require(`readline`);

//creamos la interfaz de readline para leer la entrada y mostrar la salida del usuario en consola.
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

//Le pedimos los datos de entrada al usuario como nombre, edad y sus años de experiencia 
rl.question("Ingrese su nombre ", function (nombre) {
    rl.question("Ingrese su edad ", function (edad) {
        rl.question("Ingrese su años de experiencia ", function (experiencia){
            //Convertimos la variable edadUsuario y experienciaAnio para que esas variables dejen de ser string y tomen solo valores enteros 
            let edadUsuario = parseInt(edad);
            let experienciaAnio = parseInt(experiencia); 

            //En el siguiente paso validamos si el usurio cumple las dos condiciones necesarias para que sea candidato al trabajo, si no se muestra el caso contrario que no cumple 
            if(edadUsuario > 18 && experienciaAnio > 0  ){
                console.log(`El usuario: ${nombre} \nEs Candidato valido`);
            }else{
                console.log(`El usuario: ${nombre} \nNo cumple con los requisitos`);
            }
//con este cerramos la interfaz de readline para que no quede abierta y el programa pueda terminar correctamente.
            rl.close();
        });
    });
});