const { guardarDatos } = require('../database/database');

function insertarPaciente(rl, pacientes, callback) {
    rl.question("Nombre: ", (nombre) => {
        rl.question("Apellido: ", (apellido) => {
            rl.question("Edad: ", (edad) => {
                rl.question("Correo: ", (correo) => {

                    // Validación: correo único (sin importar mayúsculas/minúsculas)
                    const existe = pacientes.some(p => p.correo.toLowerCase() === correo.toLowerCase());

                    if (existe) {
                        console.log("\nERROR: Ya existe un paciente con ese correo.");
                    } else {
                        pacientes.push({
                            nombre: nombre,
                            apellido: apellido,
                            edad: parseInt(edad),
                            correo: correo
                        });
                        guardarDatos(pacientes);
                        console.log("\nPaciente registrado y archivo JSON actualizado.");
                    }
                    callback();
                });
            });
        });
    });
}

module.exports = insertarPaciente;