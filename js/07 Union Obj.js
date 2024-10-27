// Unir 2 objetos o mas
const producto = {
    precio: 12,
    nombre: 'Hola',
    selled: false,
}

const cliente = {
    nombre: 'Juan',
    premium: false,
}
// Con esto literalmente metemos un objeto dentro de otro objeto
// const carrito = {
//     cant:1,
//     producto
// }

// Si queremos que herede sus atributos se coloca ...
const carrito = {
    cant:1,
    ...producto //Spread operator
}

console.log('carrito')
console.log(carrito)


// Unir dos objetos en uno mismo
const nuevoObjeto ={
    ...producto,
    ...cliente
}
// Si unimos 2 productos y existen llaves iguales es reasignado por el ultimo objeto que se coloca

console.log(nuevoObjeto)

// Lo mismo pero mas corto y entendible
const nuevoObjeto2 = Object.assign(producto,cliente)
