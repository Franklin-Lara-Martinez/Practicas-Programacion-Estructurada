const { guardarDatos } = require('../database/database');

function eliminarUsuario(rl, usuarios, callback) {
    rl.question("Ingrese el correo del usuario a eliminar: ", (correoEliminar) => {
        const existe = usuarios.some(u => u.correo.toLowerCase() === correoEliminar.toLowerCase());

        if (!existe) {
            console.log("\nERROR: Usuario no encontrado.");
        } else {
            const nuevosUsuarios = usuarios.filter(u => u.correo.toLowerCase() !== correoEliminar.toLowerCase());
            usuarios.length = 0;
            usuarios.push(...nuevosUsuarios);

            guardarDatos(usuarios);
            console.log("\nUsuario eliminado y archivo JSON actualizado.");
        }
        callback();
    });
}

module.exports = eliminarUsuario;