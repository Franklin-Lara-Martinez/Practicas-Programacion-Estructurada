const {guardarDatos} = require('../database/database');

function insertarUsuario(rl,usuario,callback){
    
rl.question('Ingrese el nombre del usuario: ', (nombre) => {
    rl.question('Ingrese la edad del usuario: ', (edad) => {
        rl.question('Ingrese el correo del usuario: ', (correo) => {

            const correoExiste = usuario.some(u => u.correo.toLowerCase() === correo.toLowerCase())
            if(correoExiste){
                console.log(`\n ERROR : El correo ${correo} ya existe`);
            }else{
                const nuevoUsuario = {nombre,edad:parseInt(edad),correo};
                usuario.push(nuevoUsuario);

                guardarDatos(usuario);

                console.log("Usuario registrado y guardado")
            }

            callback();


});
});
});

};

module.export = insertarUsuario