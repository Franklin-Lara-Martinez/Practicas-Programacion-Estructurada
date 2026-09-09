// Validar calificación: Solicite una calificación (0-100). 
// Muestre si aprobó (>=60) o reprobó (<60).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una  calificación (0-100): " , function(calificacion){

    if(calificacion>=0 && calificacion<=100){
        if(calificacion>=60){
            console.log(`felicidades usted aprobo`);

        }else{
            console.log(`usted no aprobo`);

        };
    }else{
       console.log(`su calificacion tienen que eestar en el rango de 0-100`);
    }
    rl.close();
})