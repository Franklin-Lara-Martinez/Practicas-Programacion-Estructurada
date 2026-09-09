// Categoría por edad: Solicite la edad del usuario. 
// Clasifíquelo en: niño (0-12), adolescente (13-17), adulto (18-64) o adulto mayor (65+).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su edad: " , function(edad){

    if(edad >= 0 && edad <= 12){
        console.log(`Su categoria es: niño`);
    }else if(edad >= 13 && edad <= 17){
        console.log(`Su categoria es: adolescente`);
    }else if(edad >= 18 && edad <= 64){
        console.log(`Su categoria es: adulto`);
    }else if(edad >= 65){
        console.log(`Su categoria es: adulto mayor`);
    }else{
        console.log(`Edad no valida`);
    }
    rl.close();

});