//Tarea 2: Funciones para figuras geométricas
//Cree funciones para calcular el área y el perímetro de las siguientes figuras: círculo, cuadrado, rectángulo y triángulo. Cada función debe recibir los parámetros necesarios y retornar el resultado. Cree un menú con Switch para que el usuario elija la figura y luego ingrese los datos necesarios. Muestre el área y el perímetro con 2 decimales.

//Importamos readline para poder pedirle datos al usuario por consola.
import readline from 'readline';

//Creamos la interfaz que lee lo que escribe el usuario y muestra los mensajes en consola.
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Esta funcion recibe el radio y devuelve el area del circulo (pi por radio al cuadrado).
function calcularAreaCirculo(valorRadio) {
    return Math.PI * Math.pow(valorRadio, 2);
}

//Esta funcion recibe el radio y devuelve el perimetro del circulo (2 por pi por radio).
function calcularPerimetroCirculo(valorRadio) {
    return 2 * Math.PI * valorRadio;
}

//Esta funcion recibe el lado y devuelve el area del cuadrado (lado al cuadrado).
function calcularAreaCuadrado(valorLado) {
    return Math.pow(valorLado, 2);
}

//Esta funcion recibe el lado y devuelve el perimetro del cuadrado (4 por el lado).
function calcularPerimetroCuadrado(valorLado) {
    return 4 * valorLado;
}

//Esta funcion recibe base y altura y devuelve el area del rectangulo (base por altura).
function calcularAreaRectangulo(valorBase, valorAltura) {
    return valorBase * valorAltura;
}

//Esta funcion recibe base y altura y devuelve el perimetro del rectangulo (2 por la suma de los lados).
function calcularPerimetroRectangulo(valorBase, valorAltura) {
    return 2 * (valorBase + valorAltura);
}

//Esta funcion recibe base y altura y devuelve el area del triangulo (base por altura entre 2).
function calcularAreaTriangulo(valorBase, valorAltura) {
    return (valorBase * valorAltura) / 2;
}

//Esta funcion recibe los tres lados y devuelve el perimetro del triangulo (la suma de los tres).
function calcularPerimetroTriangulo(ladoA, ladoB, ladoC) {
    return ladoA + ladoB + ladoC;
}

//Esta funcion muestra el menu y se encarga de pedir los datos segun la figura que elija el usuario.
function mostrarMenuFiguras() {
    //Mostramos las opciones para que el usuario vea que figuras puede elegir.
    console.log("Seleccione la figura geométrica:");
    console.log("1. Círculo");
    console.log("2. Cuadrado");
    console.log("3. Rectángulo");
    console.log("4. Triángulo");

    //Le pedimos la opcion al usuario, llega como texto, por eso en el switch comparamos con '1', '2', etc.
    entrada.question("Ingrese el número de la figura: ", (opcionFigura) => {
        //Usamos el switch para decidir que figura trabajar segun la opcion elegida.
        switch (opcionFigura) {
            case '1':
                //Para el circulo solo necesitamos el radio.
                entrada.question("Ingrese el radio del círculo: ", (textoRadio) => {
                    //Convertimos el radio a numero con decimales.
                    const radioCirculo = parseFloat(textoRadio);
                    //Llamamos a las funciones para obtener el area y el perimetro.
                    const areaResultado = calcularAreaCirculo(radioCirculo);
                    const perimetroResultado = calcularPerimetroCirculo(radioCirculo);
                    //Mostramos los resultados con 2 decimales.
                    console.log(`Área del círculo: ${areaResultado.toFixed(2)}`);
                    console.log(`Perímetro del círculo: ${perimetroResultado.toFixed(2)}`);
                    entrada.close();
                });
                break;
            case '2':
                //Para el cuadrado solo necesitamos un lado.
                entrada.question("Ingrese el lado del cuadrado: ", (textoLado) => {
                    const ladoCuadrado = parseFloat(textoLado);
                    const areaResultado = calcularAreaCuadrado(ladoCuadrado);
                    const perimetroResultado = calcularPerimetroCuadrado(ladoCuadrado);
                    console.log(`Área del cuadrado: ${areaResultado.toFixed(2)}`);
                    console.log(`Perímetro del cuadrado: ${perimetroResultado.toFixed(2)}`);
                    entrada.close();
                });
                break;
            case '3':
                //Para el rectangulo necesitamos dos datos, entonces anidamos las preguntas.
                entrada.question("Ingrese la base del rectángulo: ", (textoBase) => {
                    entrada.question("Ingrese la altura del rectángulo: ", (textoAltura) => {
                        const baseRectangulo = parseFloat(textoBase);
                        const alturaRectangulo = parseFloat(textoAltura);
                        const areaResultado = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
                        const perimetroResultado = calcularPerimetroRectangulo(baseRectangulo, alturaRectangulo);
                        console.log(`Área del rectángulo: ${areaResultado.toFixed(2)}`);
                        console.log(`Perímetro del rectángulo: ${perimetroResultado.toFixed(2)}`);
                        entrada.close();
                    });
                });
                break;
            case '4':
                //Para el triangulo pedimos los tres lados (para el perimetro) y la altura (para el area).
                entrada.question("Ingrese el lado 1 del triángulo: ", (textoLadoA) => {
                    entrada.question("Ingrese el lado 2 del triángulo: ", (textoLadoB) => {
                        entrada.question("Ingrese el lado 3 del triángulo: ", (textoLadoC) => {
                            entrada.question("Ingrese la altura del triángulo: ", (textoAltura) => {
                                //Tomamos el lado 1 como la base del triangulo, la altura debe corresponder a ese lado.
                                const areaResultado = calcularAreaTriangulo(parseFloat(textoLadoA), parseFloat(textoAltura));
                                const perimetroResultado = calcularPerimetroTriangulo(parseFloat(textoLadoA), parseFloat(textoLadoB), parseFloat(textoLadoC));
                                console.log(`Área del triángulo: ${areaResultado.toFixed(2)}`);
                                console.log(`Perímetro del triángulo: ${perimetroResultado.toFixed(2)}`);
                                entrada.close();
                            });
                        });
                    });
                });
                break;
            default:
                //Si el usuario escribe algo que no es del 1 al 4, le avisamos y cerramos el programa.
                console.log("Opción no válida");
                entrada.close();
        }
    });
}

//Iniciamos el programa llamando a la funcion del menu.
mostrarMenuFiguras();