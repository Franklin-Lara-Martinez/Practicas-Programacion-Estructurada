// Tarea 1: Clasificación de figuras geométricas
// Solicite al usuario el número de lados de una figura (3, 4, 5, 6).
// Utilizando Switch, muestre el nombre de la figura correspondiente:
// 3=Triángulo, 4=Cuadrilátero, 5=Pentágono, 6=Hexágono. Si el número no está en la lista, muestre "Figura no reconocida".

//Importamos el modulo para trabajar con los datos del usuario.
const readline = require(`readline`);

//Creamos la interfaz para poder recibir los datos de entrada y salida que ingrese el usuario.
const figura = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Le preguntamos al usuario que ingrese el numero de lados de su figura
figura.question(
  "Ingrese el numero de lados de una figura (3, 4, 5, 6) ",
  (figuraLados) => {
    //Convertimos la variable figuraLados a un numero entero para que al momento que el switch la opcion la reconozca como un numero.
    let numeroLados = parseInt(figuraLados);
    //Creamos esta variable para guardar el nombre de la figura y mostrarlo al finalizar en un console.log.
    let nombreFigura;

    //Aqui en el switch se evalua la opcion ingresada por el usuario segun los lados que ingrese de su figura.
    switch (numeroLados) {
      case 3: //Si ingreso 3 lados se le muestra "Triángulo".
        nombreFigura = `Triángulo`;
        break;
      case 4: // Si ingreso 4 lados se le muestra "Cuadrilátero".
        nombreFigura = `Cuadrilátero`;
        break;
      case 5: // Si ingreso 5 lados se le muestra "Pentágono".
        nombreFigura = `Pentágono`;
        break;
      case 6: //Si ingreso 6 lados se le muestra "Hexágono".
        nombreFigura = `Hexágono`;
        break;
      default: // Si el usuario ingresara un numero que no esta en la lista se le mostrara "Figura no reconocida" y asi cerrando el switch.
        nombreFigura = `Figura no reconocida`;
    }

    //Mostramos el mensaje en pantalla.
    //Si se cumple la primera condicion le dira al usuario que su figura no es reconocida.
    if (nombreFigura === "Figura no reconocida") {
      console.log(`No se reconoce una figura con ${figuraLados} lados.`);
      //En caso contrario si es una figura valida le dira al usuario el nombre de la figura.
    } else {
      console.log(`Su figura tiene ${figuraLados} lados y es un: ${nombreFigura}`);
    }
    //Cerramos el modulo
    figura.close();
  },
);
