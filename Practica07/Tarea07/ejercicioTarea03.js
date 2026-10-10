// Tarea 3: Inventario de productos (FOR...OF y FOR...IN)
// Cree un arreglo de objetos que represente un inventario con al menos 4 productos. 
// Cada producto debe tener: nombre, precio y cantidad. 
// Usando FOR...OF, recorra el arreglo y muestre cada producto con su valor total (precio × cantidad). 
// Además, usando FOR...IN, recorra un objeto que represente el resumen del inventario 
// (total de productos, valor total del inventario) y muestre sus propiedades.

// Mi arreglo con 4 productos. Cada uno tiene nombre, precio y cantidad.
const arreglo = [
    {nombre: "Iphone", precio: 800, cantidad: 2},
    {nombre: "Laptop HP", precio: 250, cantidad: 3},
    {nombre: "Teclado", precio: 80, cantidad: 5},
    {nombre: "Zapatos Nike", precio: 100, cantidad: 7}
];

// Aquí voy a ir guardando la suma de todo.
let total = 0;

// Recorro cada producto con for...of.
for (const producto of arreglo) {
    // Sumo el precio por la cantidad de cada producto.
    total += producto.precio * producto.cantidad;
    
    // Muestro el nombre y lo que vale ese producto.
    console.log(`Producto ` + `:` + producto.nombre + `:` + ` Precio ` + (producto.precio * producto.cantidad));
}

// Aquí guardo el resumen: cuántos productos hay y cuánto vale todo.
const resumen = {
    totalProductos: arreglo.length,
    valorTotal: total
};

// Pongo un título para que se vea bonito.
console.log("\n=== RESUMEN INVENTARIO ===")

// Recorro el resumen con for...in y muestro cada dato.
for (const resuInventario in resumen) {
  console.log(resuInventario + ": " + resumen[resuInventario]);
}