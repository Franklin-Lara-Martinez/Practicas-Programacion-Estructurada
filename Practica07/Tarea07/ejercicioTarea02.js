// Tarea 2: Cajero automático mejorado (DO...WHILE)
// Cree un cajero con saldo inicial de $1000. El menú debe repetirse hasta que el usuario salga:
// 1) Consultar saldo, 2) Retirar, 3) Depositar, 4) Salir.
//  Valide que los retiros no excedan el saldo y que los depósitos sean mayores a 0.
// Use Switch y DO...WHILE.

// Importar readline-sync para entrada de datos síncrona.
const readlineSync = require("readline-sync");

//Creamos una variable para iniciar con un saldo de 1000$ para el usuario.
let saldoInicial = 1000;
//Creamos una variable retiro iniciada en cero para hacer el proceso correspondiente si el usuario elige la dicha opcion.
let retiro = 0;
//Creamos una variable deposito iniciada en cero para agregar lo que el usuario desea depositar si elige dicha opcion.
let depositar = 0;
//Creamos la variable total para guardar el valor de la operacion que el usuario desea realizar.
//Esta variable la iniciamos en cero tambien.
let total = 0;
//Creamos la opc para que usarla adentreo del (DO...WHILE) con el Switch.
let opc;
//Usamos un (DO...WHILE) para que el bucle se repita una vez y tomar lo que el usuario desea hacer o si desea salir del menu del cajero.
do {
  //Creamos el menu del cajero para que el usuario mire que opcion elige.
  console.log("\n=== MENU CAJERO ===");
  console.log("1. Consultar saldo");
  console.log("2. Retirar");
  console.log("3. Depositar");
  console.log("4. Salir");

  //Se le solicita la opcion que el usuario va ingresar para realizar una opcion.
  //Pasamos de String a tipo numero la opcion que ingrese el usuario para usarla en Switch.
  opc = parseInt(
    readlineSync.question("Ingrese la opcion que desea realizar "),
  );

  //Dentro del (DO...WHILE) usamos un Switch para ir realizando los procesos que eliga el usuario mediante el menu.
  switch (opc) {
    //En la opcion 1 se le muestra al usuario el saldo inicial de su cuenta.
    case 1:
      console.log(`\nSu saldo actual es de: $${saldoInicial}`); //Se le muestra el mensaje al usuario con su saldo.
      break; //Con el break cerramos todas las demas opciones para que no se ejecuten.

    //En la opcion 2 se le pide al usuario que ingrese la cantidad que desea retirar.
    //Tambien validamos que el dato ingresado por el usuario sea mayor a 0 y no excesa el saldo inicial.
    case 2:
      //Aqui se le pregunta al usuario por el monto del retiro.
      retiro = parseFloat(
        readlineSync.question("\nIngrese la cantidad que desea retirar: "),
      );

      //Validamos que el retiro sea mayor a 0 y menor o igual al saldo que tenemos disponible.
      if (retiro > 0 && retiro <= saldoInicial) {
        total = saldoInicial - retiro; //Restamos el retiro al saldo para obtener el total.
        saldoInicial = total; //Actualizamos el saldo inicial con el nuevo total.
        console.log(
          `\nSu saldo retirado es: $${retiro.toFixed(2)}\nSu saldo restante es de: $${total.toFixed(2)}`,
        ); //Mostramos el resultado del retiro.
      } else {
        console.log("Monto invalido ingrese una cantidad validad"); //Mensaje por si el monto no es permitido.
      }
      break; //Cerramos el caso 2.

    //En la opcion 3 se le pide al usuario que ingrese la cantidad que desea depositar a su cuenta.
    case 3:
      //Aqui le pedimos el monto que desea ingresar al cajero.
      depositar = parseFloat(
        readlineSync.question("\nIngrese la cantidad que desea depositar: "),
      );

      //Validamos que el deposito sea mayor a 0 para que sea una cantidad valida.
      if (depositar > 0) {
        total = saldoInicial + depositar; //Sumamos el deposito al saldo actual.
        saldoInicial = total; //Actualizamos el saldo inicial con el nuevo total.
        console.log(
          `\nSu saldo depositado es: $${depositar.toFixed(2)}\nSu saldo actual es: $${total.toFixed(2)}`,
        ); //Mostramos el resultado del deposito.
      } else {
        console.log("Monto invalido ingrese un monto mayor que cero"); //Mensaje por si el deposito es menor o igual a cero.
      }
      break; //Cerramos el caso 3.

    //En la opcion 4 le indicamos al usuario que esta saliendo del sistema del cajero.
    case 4:
      console.log("Saliendo del sistema"); //Mensaje de despedida del cajero.
      break; //Cerramos el caso 4.

    //El default se ejecuta si el usuario ingresa un numero que no esta dentro del menu (diferente de 1 a 4).
    default:
      console.log("Ingrese una opcion valida"); //Aviso para que elija una opcion correcta.
      break;
  }

  //El (DO...WHILE) se seguira repitiendo mientras la opcion ingresada sea diferente de 4 (que es la opcion de salir).
} while (opc !== 4);
