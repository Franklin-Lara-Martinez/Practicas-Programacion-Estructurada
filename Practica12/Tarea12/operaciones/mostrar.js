function mostrarPacientes(pacientes, callback) {
    if (pacientes.length === 0) {
        console.log("\nNo hay pacientes registrados.");
    } else {
        console.log("\n===== LISTA DE PACIENTES =====");
        pacientes.forEach((p, i) => {
            console.log(`${i + 1}. ${p.nombre} ${p.apellido} | Edad: ${p.edad} | Correo: ${p.correo}`);
        });
    }
    callback();
}

module.exports = mostrarPacientes;