// Tarea 2: Nivel de estudios
// Solicite al usuario su nivel de estudios con un número del 1 al 5: 1=Primaria, 2=Secundaria, 3=Bachillerato, 4=Universidad, 5=Postgrado.
// Usando Switch, muestre el nivel correspondiente.
// Si el número no es válido, muestre "Nivel no válido".

//Importamos el modulo para trabajar con los datos del usuario.
const readline = require(`readline`);

//Creamos la interfaz para poder recibir los datos de entrada y salida que ingrese el usuario.
const estudiante = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Le solicitamos su nivel de estudio al usuario que ingrese un numero del (1, 5)
estudiante.question(
  "Ingrese su nivel de estudio con un numero del (1, 5) ",
  (numero) => {
    //Convertimos la variable "numero" a un numero entero para poderla usar en switch.
    let nivelEstudio = parseInt(numero);
    // Bandera declaramos esta variable en el valor "true" suponiendo que el caso de nivel es valido, su valor cambiara si se demuestra lo contrario.
    let nivelReconocido = true;
    //Declaramos la variable "nivelCorrespondiente" para guardar dentro de switch el nivel que se encuentra el usuario. Esto es una buena practica en vez de declarar variables dentro de switch.
    let nivelCorrespondiente;

    //El switch evalua el nivel ingresado y se encarga de darle el nombre del nivel de estudio que corresponde.
    switch (nivelEstudio) {
      case 1: //Si su nivel es 1 mostrara "Primaria"
        nivelCorrespondiente = `Primaria`;
        break;
      case 2: //Si su nivel es 2 mostrara "Secundaria"
        nivelCorrespondiente = `Secundaria`;
        break;
      case 3: //Si su nivel es 3 mostrara "Bachillerato"
        nivelCorrespondiente = `Bachillerato`;
        break;
      case 4: //Si su nivel es 4 mostrara "Universidad"
        nivelCorrespondiente = `Universidad`;
        break;
      case 5: //Si su nivel es 5 mostrara "Postgrado"
        nivelCorrespondiente = `Postgrado`;
        break;
      default:
        nivelReconocido = false; // Si el usuario ingresa un nivel invalido la variable anteriormente declarada nivelReconocido como "true" se convierte "false".
    }

    //En la condicion como el usuario ingreso una opcion que es valida el valor de la variable "nivelReconocido = true" se le muestra el siguiente mensaje al usuario  
    if (nivelReconocido) {
      console.log(`Su nivel de estudio es: ` + nivelCorrespondiente);
    //En caso contrario ingreso un nivel invalido la variable "nivelReconocido = false" cambia su valor booleano para mostrar el mensaje del caso invalido.
    } else { 
      console.log(`Nivel no valido`);
    }

     //Cerramos el modulo
    estudiante.close();
  },
);
