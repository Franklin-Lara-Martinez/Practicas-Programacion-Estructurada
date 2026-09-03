// Tarea 2: Información de producto con precio
// Solicite el nombre del producto, precio unitario y cantidad. Muestre el nombre en mayúsculas, extraiga las primeras 3 letras del producto y muestre el precio total con 2 decimales.

let nombreProducto = "Laptop Dell"; // Esta seria la simulacion de la entrada del usuario donde le pedimos el nombre del producto

let precioUnitario = 100.50; //Aqui en la variable se declara para poderle dar un precio al producto 

let cantidad = 2; // En esta variable guardamos la cantidad del producto que el usuario desea comprar 

//Convertimos el nombre del producto a mayusculas
let nombreProductoMayusculas = nombreProducto.toUpperCase();

//Extraemos con el metodo slice las 3 primeras letras del nombre del producto
let primerasTresLetras = nombreProductoMayusculas.slice(0, 3);

// En esta linea calcularemos el precio total de la compra del producto multiplicando el precio del producto por la cantidad
let precioTotal = precioUnitario * cantidad;

//Mostramos todos los resultados que los pide el enunciado
console.log(`Nombre del producto en mayusculas: ${nombreProductoMayusculas}. \n Primeras 3 letras del producto: ${primerasTresLetras}. \n Precio total de la compra: $${precioTotal.toFixed(2)}`);