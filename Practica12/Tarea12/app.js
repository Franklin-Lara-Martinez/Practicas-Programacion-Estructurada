const readline = require('readline');
const { cargarDatos } = require('./database/database');
const insertarPaciente = require('./operaciones/insertar');
const mostrarPacientes = require('./operaciones/mostrar');
const actualizarPaciente = require('./operaciones/actualizar');
const eliminarPaciente = require('./operaciones/eliminar');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se cargan los datos al iniciar (crea usuarios.json si no existe)
const pacientes = cargarDatos();

function menu() {
    console.log("\n==============================================");
    console.log("      SISTEMA DE REGISTRO DE PACIENTES");
    console.log("==============================================");
    console.log(`  Pacientes registrados: ${pacientes.length}`);
    console.log("----------------------------------------------");
    console.log("  1. Insertar    -> Registrar un nuevo paciente");
    console.log("  2. Mostrar     -> Ver la lista de pacientes");
    console.log("  3. Actualizar  -> Modificar los datos de un paciente");
    console.log("  4. Eliminar    -> Borrar un paciente por su correo");
    console.log("  5. Salir       -> Cerrar el programa");
    console.log("----------------------------------------------");

    rl.question("Seleccione una opción (1-5): ", (opcion) => {
        switch (opcion) {
            case '1':
                insertarPaciente(rl, pacientes, menu);
                break;
            case '2':
                mostrarPacientes(pacientes, menu);
                break;
            case '3':
                actualizarPaciente(rl, pacientes, menu);
                break;
            case '4':
                eliminarPaciente(rl, pacientes, menu);
                break;
            case '5':
                console.log("\nGracias por usar el sistema. ¡Hasta pronto!");
                rl.close();
                break;
            default:
                console.log("\nOpción no válida. Por favor ingrese un número del 1 al 5.");
                menu();
        }
    });
}

menu();