// Tarea 3: Máquina de bebidas
// Cree un programa que simule una máquina expendedora de bebidas con las siguientes opciones: 
// 1=Agua, 2=Refresco, 3=Jugo, 4=Café, 5=Té. Usando Switch, muestre el mensaje "Ha seleccionado: [nombre de la bebida]".
// Si la opción no es válida, muestre "Bebida no disponible". Además, si la bebida es Refresco o Jugo, agregue el mensaje "¿Desea agregar hielo?".

//Importamos el modulo para trabajar con los datos del usuario.
const readline = require(`readline`);

//Creamos la interfaz para poder recibir los datos de entrada y salida que ingrese el usuario.
const expendedoraMaquina= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Funcion para mostrar el menu de opciones 
function mostrarMenu (){
 console.log('\n=== MÁQUINA DE BEBIDAS ===');
console.log('1. Agua');
console.log('2. Refresco');
console.log('3. Jugo');
console.log('4. Café');
console.log('5. Té');
}

//Mostramos el menu al usuario 
//Tambien se le solicitad al usuario ingresar un opcion de maquina expendedora
mostrarMenu();
expendedoraMaquina.question("Ingrese una opcion de bebida ", (expendedora) => {
    
    //Convertimos el dato ingresado del usuario a un numero entero para poderlo trabajar en el menu "Switch".
    let opcionExpendedora = parseInt(expendedora);
    // Bandera declaramos esta variable en el valor "true" suponiendo que el caso de nivel es valido, su valor cambiara si se demuestra lo contrario.
    let opcionReconocida = true;
    ////Declaramos la variable "nombreBebida" para guardar dentro de switch el nivel que se encuentra el usuario. Esto es una buena practica en vez de declarar variables dentro de switch.
    let nombreBebida;

    switch (opcionExpendedora) {
        case 1: //Si se ingresa la opcion 1 se guarda en la variable nombreBebida "Agua".
            nombreBebida = `Agua`;
            break;
        case 2: //Si se ingresa la opcion 2 se guarda en la variable nombreBebida "Refresco".
            nombreBebida = `Refresco`;
            break;
        case 3: //Si se ingresa la opcion 3 se guarda en la variable nombreBebida "Jugo".
            nombreBebida = `Jugo`;
            break;
        case 4: //Si se ingresa la opcion 4 se guarda en la variable nombreBebida "Café".
            nombreBebida = `Café`;
            break;
        case 5: //Si se ingresa la opcion 5 se guarda en la variable nombreBebida "Té".
            nombreBebida = `Té`
            break;
        default:
            opcionReconocida = false; // Si el usuario ingresa una bebida invalido la variable anteriormente declarada opcionReconocida como "true" se convierte "false".

    }

     //En la condicion como el usuario ingreso una opcion que es valida el valor de la variable "opcionReconocida = true" se le muestra el siguiente mensaje al usuario  
    if (opcionReconocida) {
        console.log(`Ha seleccionado: ${nombreBebida}`);

        //Si la bebida es un refresco o jugo se le muestra al usuario la pregunta "¿Desea agregar hielo?" solamente para estas dos opciones.
        if(nombreBebida === `Refresco` || nombreBebida === `Jugo`){
            console.log(`¿Desea agregar hielo?`);
        }
    //En caso contrario ingreso una bebida no valida la variable "opcionReconocida = false" cambia su valor booleano para mostrar el mensaje del caso invalido.    
    }else{ 
        console.log(`Bebida no disponible`);
    }
     //Cerramos el modulo
    expendedoraMaquina.close();
});