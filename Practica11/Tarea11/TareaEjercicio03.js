// Tarea 3: Procesamiento de arreglo de objetos con forEach y filter
// Cree un arreglo de objetos que represente productos, donde cada objeto tenga nombre y precio (por ejemplo: { nombre: "Laptop", precio: 800 }).

// Primero, creo mi arreglo con varios objetos de productos.
const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Silla Gamer", precio: 250 }
];

// Aquí creo mi primer callback. Recibe un producto y solo se encarga de mostrarlo bonito.
const mostrarProducto = (producto) => {
    console.log("Producto: " + producto.nombre + " | Precio: $" + producto.precio);
};

// Uso forEach para recorrer el arreglo. Le paso mi callback 'mostrarProducto'.
console.log("--- Lista completa de productos ---");
productos.forEach(mostrarProducto);

// Aquí creo mi segundo callback. Se encarga de decir si el producto cuesta más de $100.
const esMayorACien = (producto) => producto.precio > 100;

// Uso filter para obtener un nuevo arreglo. Le paso mi callback 'esMayorACien'.
// filter se encarga de guardar solo los productos que devuelvan 'true' en el callback.
const productosCaros = productos.filter(esMayorACien);

// Finalmente, imprimo el nuevo arreglo filtrado en consola de manera clara.
console.log("\n--- Productos que cuestan más de $100 ---");
// Vuelvo a usar forEach con mi callback para imprimir solo los productos filtrados.
productosCaros.forEach(mostrarProducto);