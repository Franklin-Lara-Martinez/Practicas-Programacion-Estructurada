// Tarea 3: Descuento por monto de compra
// Solicite el monto de compra. Si es mayor a $100, aplique 15% de descuento.
// Si es mayor a $50, aplique 10%.
// En otro caso, no hay descuento.
// Muestre el monto original, el descuento aplicado y el total a pagar con 2 decimales.

//Importamos el módulo readline para ingresar datos de entrada y salida para el usuario.
const readline = require("readline");

//creamos la interfaz de readline para leer la entrada y mostrar la salida del usuario en consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//Hacemos la pregunta del monto de la compra del usuario para poder ir haciendo los calculos del total a pagar.
rl.question("Ingrese el monto de su compra ", function (monto) {
//Declaramos la variables con las que trabajaremos y le daremos el monto ingresado que tome numeros con decimales
//Tambien declaramos dos variables de descuento agregandole el descuento propio que tendra cada una 
//La variable descuentoAplicado y total le damos un valor de cero para que al momento de que la condicion se cumpla podamos darle otro valor a esas variables dentro de la estructura de control.
  let montoCompra = parseFloat(monto);
  let descuentoMayor = 15;
  let descuentoMenor = 10;
  let descuentoAplicado = 0;
  let total = 0;

//En este apartado es donde se toma la decisión de que descuento tendra el usuario y si no tendra ni un descuento del monto de su compra,
  if (montoCompra > 100) {
    descuentoAplicado = montoCompra * (descuentoMayor / 100);
    total = montoCompra - descuentoAplicado;
    console.log(`Su compra fue de $${montoCompra.toFixed(2)} \nSe le aplicara un descuento de (15%) que serian  $${descuentoAplicado.toFixed(2)} \nSu total a pagar es: $${total.toFixed(2)}`);
  } else if (montoCompra > 50) {
    descuentoAplicado = montoCompra * (descuentoMenor / 100);
    total = montoCompra - descuentoAplicado;
    console.log(`Su compra fue de $${montoCompra.toFixed(2)} \nSe le aplicara un descuento de (10%) que serian  $${descuentoAplicado.toFixed(2)} \nSu total a pagar es: $${total.toFixed(2)} `);
  } else {
    total = montoCompra;
    console.log(`Lo sentimos su compra no aplica descuento su precio a pagar es: $${total.toFixed(2)}`);
  }

//con este cerramos la interfaz de readline para que no quede abierta y el programa pueda terminar correctamente.
  rl.close();
});
