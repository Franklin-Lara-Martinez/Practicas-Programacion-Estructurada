// Validar número positivo: Solicite un número al usuario. 
// Verifique si es positivo, negativo o cero, y muestre un mensaje correspondiente.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero: " , function(num){

    if(num >=1){
        console.log(`su numero es positivo`);
    }else if(num -=1){
              console.log(`su numero es negativo`);
    }else{
                  console.log(`su numero es 0`);
            
    }
    rl.close();
})