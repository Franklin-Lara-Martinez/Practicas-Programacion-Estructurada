const fs = require('fs');
const path = require('path');

// El archivo JSON queda en la raíz del proyecto (junto a app.js)
const RUTA_ARCHIVO = path.join(__dirname, '..', 'usuarios.json');

// Lee los pacientes del archivo. Si no existe, lo crea automáticamente.
function cargarDatos() {
    if (!fs.existsSync(RUTA_ARCHIVO)) {
        fs.writeFileSync(RUTA_ARCHIVO, '[]', 'utf-8');
        return [];
    }

    try {
        const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8');
        return contenido.trim() ? JSON.parse(contenido) : [];
    } catch (error) {
        console.log("\nERROR: No se pudo leer usuarios.json, se iniciará vacío.");
        return [];
    }
}

// Escribe el arreglo de pacientes en el archivo JSON
function guardarDatos(pacientes) {
    fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(pacientes, null, 2), 'utf-8');
}

module.exports = { cargarDatos, guardarDatos };