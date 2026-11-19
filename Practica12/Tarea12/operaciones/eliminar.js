const { guardarDatos } = require('../database/database');

function eliminarPaciente(rl, pacientes, callback) {
    rl.question("Ingrese el correo del paciente a eliminar: ", (correoEliminar) => {
        const existe = pacientes.some(p => p.correo.toLowerCase() === correoEliminar.toLowerCase());

        if (!existe) {
            console.log("\nERROR: Paciente no encontrado.");
        } else {
            const nuevosPacientes = pacientes.filter(p => p.correo.toLowerCase() !== correoEliminar.toLowerCase());
            pacientes.length = 0;
            pacientes.push(...nuevosPacientes);

            guardarDatos(pacientes);
            console.log("\nPaciente eliminado y archivo JSON actualizado.");
        }
        callback();
    });
}

module.exports = eliminarPaciente;