//Declaramos dos variables la de kilowatts usados durante el mes y la del precio del kilowatts las que usaremos para hacer operacioens para calcular nuestra factura 
let  kilowattsMes  = 250;
let precioKilowatts = 0.15;

//Creamos la variable costo base para calcular y almacenar el precio normal del mes sin impuesto
let costoBase = kilowattsMes * precioKilowatts; 
//En la variable aplicar impuesto mostraremos al usuario el impuesto que se le aplicara al costo final de la factura  
let aplicarImpuesto = costoBase * 0.10;
//Creamos la variable costo total para mostrarle al usuario el costo total mas su impuesto que debera cancelar 
let costoTotal = costoBase + aplicarImpuesto; 

//Le mostraremos al usuario cuantos kilowatts al mes para tener una factura mas completa 
console.log(`Consumio en el mes un total de: ${kilowattsMes} kilowatts`);
//Le mostraremos al usuario el precio original sin el impuesto aplicado
console.log(`El costo base sin aplicar impuestos es de: $`+costoBase.toFixed(2));
//Le mostraremos al usuario el impuesto que se le aplicara a su costo total 
console.log(`El monto total que se le aplicara por el impuesto del (10%) es de: $`+aplicarImpuesto.toFixed(2));
//Al finalizar le mostraremos en la factura el total que el usuario debera cancelar
console.log(`El total a cancelar con impuesto aplicado es de: $`+costoTotal.toFixed(2));
