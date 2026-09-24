// Tarea 3: Simulador de cajero automático con menú
// Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
// Muestre un menú con las opciones:
// 1. Consultar saldo
// 2. Retirar dinero
// 3. Depositar dinero
// 4. Salir
// Usando Switch, ejecute la opción seleccionada:
// - Opción 1: Muestre el saldo actual.
// - Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5 
//   y que no exceda el saldo. Si cumple, reste del saldo; si no, muestre el error 
//   correspondiente.
// - Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no 
//   exceda $5000 en un solo depósito. Si cumple, sume al saldo; si no, muestre 
//   el error.
// - Opción 4: Muestre "Gracias por usar el cajero" y salga.
// - Si la opción no es válida, muestre "Opción no válida".



// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Creamos la interfaz de lectura de datos y salida para que el usuario pueda ingresar sus datos y mostrarle en pantalla
const simulador = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Iniciamos con un saldo de $1000 nombrado con la variable saldoInicial 
let saldoInicial = 1000;

//Creamos el menu que utilizaremos en el Switch mostrando todas las opciones del cajero al usuario
console.log("\n ---CAJERO AUTOMATICO--- ")
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. salir");

//Le preguntamos al usuario que opcion desea elegir en el cajero 
simulador.question("Ingrese la opcion a realizar: ", (opc) => {
    //Convertimos la variable opc string a que solo tome numeros enteros 
    let opcionCajero = parseInt(opc);

    switch (opcionCajero) {
        case 1:
            console.log(`Su saldo actual es de : $${saldoInicial}`); //En el primer case mostramos el saldo actual que tiene el usuario.
            simulador.close();
            break;
        case 2: // En esta opcion validamos el monto que sea mayor a cero que el monto sea multiplo de 5 y que el monto de retiro no exceda el saldo inicial.
            simulador.question("Ingrese el monto a retirar: ", (retiro) => {
                let montoRetiro = parseFloat(retiro);

                if (montoRetiro > 0 && montoRetiro % 5 === 0 && montoRetiro <= saldoInicial) {
                    saldoInicial = saldoInicial - montoRetiro;
                    console.log(`Retiro exitoso. Su nuevo saldo es: $${saldoInicial}`);
                } else {
                    console.log("Error: no se pudo realizar el retiro"); // De lo contrario se mostrara un error si no se cumplen las condiciones. 
                }

                simulador.close();
            });
            break;
        case 3: //En esta opcion pedimos el monto a depositar y con el if verificamos que el monto a depositar cumpla los requisitos.
            simulador.question("Ingrese el monto a depositar: ", (deposito) => {
                //Convertimos la variable deposito de string a numero que tome decimales.
                let montoDepositado = parseFloat(deposito);

                if (montoDepositado > 0 && montoDepositado <= 5000) {
                    saldoInicial = saldoInicial + montoDepositado;

                    console.log(`Su saldo con deposito es de: $${saldoInicial}`);
                } else {
                    console.log("Error: no se pudo realizar el deposito"); //De lo contrario se muestra un error indicando que no cumple con los requisitos 
                }

                simulador.close();
            });
            break;
        case 4:
            console.log("Gracias por usar el cajero"); //Mostramos el mensaje de despedida al usuario
            simulador.close();
            break;
        default:
            console.log("Opción no válida"); //Si el usuario ingresa una opcion que no existe se le muestra este mensaje
            simulador.close();
    }

});