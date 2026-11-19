const { guardarDatos } = require('../database/database');

function actualizarPaciente(rl, pacientes, callback) {
    rl.question("Ingrese el correo del paciente a actualizar: ", (correoBuscar) => {
        const paciente = pacientes.find(p => p.correo.toLowerCase() === correoBuscar.toLowerCase());

        if (!paciente) {
            console.log("\nERROR: Paciente no encontrado.");
            return callback();
        }

        console.log("(Presione Enter para dejar el valor actual)");
        rl.question(`Nuevo nombre [${paciente.nombre}]: `, (nombre) => {
            rl.question(`Nuevo apellido [${paciente.apellido}]: `, (apellido) => {
                rl.question(`Nueva edad [${paciente.edad}]: `, (edad) => {
                    rl.question(`Nuevo correo [${paciente.correo}]: `, (correo) => {

                        // Validación: el nuevo correo no debe pertenecer a OTRO paciente
                        const correoNuevo = correo || paciente.correo;
                        const repetido = pacientes.some(p =>
                            p !== paciente && p.correo.toLowerCase() === correoNuevo.toLowerCase()
                        );

                        if (repetido) {
                            console.log("\nERROR: Ese correo ya está registrado en otro paciente.");
                        } else {
                            paciente.nombre = nombre || paciente.nombre;
                            paciente.apellido = apellido || paciente.apellido;
                            paciente.edad = edad ? parseInt(edad) : paciente.edad;
                            paciente.correo = correoNuevo;

                            guardarDatos(pacientes);
                            console.log("\nPaciente actualizado y archivo JSON actualizado.");
                        }
                        callback();
                    });
                });
            });
        });
    });
}

module.exports = actualizarPaciente;