// Tarea 1: Sistema de acceso bancario
// Solicite al usuario su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium) y el monto 
// a retirar. Usando Switch, asigne un límite de retiro según el tipo de tarjeta: 
// 1=$500, 2=$1000, 3=$2000. Luego, valide con IF si el monto solicitado es menor 
// o igual al límite y si es múltiplo de $10. Si cumple ambas condiciones, muestre 
// "Retiro exitoso". Si el monto excede el límite, muestre "Límite excedido". Si no 
// es múltiplo de $10, muestre "El monto debe ser múltiplo de 10". Si el tipo de 
// tarjeta no es válido, muestre "Tarjeta no válida".

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Creamos la interfaz de lectura de datos y salida para que el usuario pueda ingresar sus datos y mostrarle en pantalla
const sistema = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Creamos el menú para que el usuario pueda elegir su tipo de tarjeta y pueda ver cuánto era su límite
console.log("\n ----TIPO DE TARJETAS--- ");
console.log("1. Debito (limite $500)");
console.log("2. Credito (limite $1000)");
console.log("3. Premium (limite $2000)");
console.log("----------------------------");

sistema.question("Ingrese un tipo de tarjeta: ", (tarjeta) => { //Aquí el usuario tendrá que ingresar el tipo de tarjeta
 sistema.question("Ingrese el monto que desea retirar: ", (monto) => {

    //Convertimos esas variables de string a números enteros y decimales para que al momento que el usuario ingrese
   let tipoTarjeta = parseInt(tarjeta);
   let montoRetiro = parseFloat(monto);

   //Creamos esta variable para que si el usuario ingresa una opción válida siga teniendo un valor verdadero para poder realizar más limpia la salida del switch
   let opcionValida = true;

   //Creamos esta variable límite para utilizarla dentro de la estructura Switch y determinar según el tipo de tarjeta del usuario
   let limite;
//Usamos la estructura Switch para que el usuario tenga un límite sobre el tipo de tarjeta que él tiene
   switch (tipoTarjeta) {
    case 1:
        limite = 500; //Una tarjeta de débito con su límite establecido
        break
    case 2: 
        limite = 1000; //una tarjeta de crédito con su límite establecido 
        break
    case 3:
        limite = 2000; // una tarjeta premium con su límite establecido
        break
    default:
     opcionValida = false;
   }
 
   //Si el usuario ingresó un tipo de tarjeta no válida, la variable opcionValida que era true pasa a false, si nos fijamos en el if usamos el operador "!" para que vuelva a ser true y se cumpla el if.
   if (!opcionValida) {
      console.log("Tarjeta no válida"); // Se le muestra al usuario que su tarjeta no es válida
   }else if(montoRetiro <= limite && montoRetiro % 10 === 0){ //Validamos el monto del retiro que debe ser menor o igual al límite para que se cumpla esa condición y con el operador "&&" verificamos que el monto sea múltiplo de 10.
    console.log("Retiro exitoso"); //Mostramos al usuario que sí pudo retirar el monto
   }else if (montoRetiro > limite) {  //Si el monto es mayor que el límite le dice al usuario que excedió el límite de su tarjeta.
    console.log("Límite excedido"); //Se le mostrará ese mensaje al usuario si esa condición se cumple 
   }else { // con else, si no cumple las dos condiciones del límite y del múltiplo de 10 se tomará esta acción.
    console.log("El monto debe ser múltiplo de 10"); //Se le mostrará este mensaje al usuario que el monto debe ser múltiplo de 10.
   }
     //Cerramos el módulo
   sistema.close();
 });
});