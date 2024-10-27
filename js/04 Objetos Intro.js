// Objetos

const producto = {
    precio: 12,
    nombre: 'Hola',
    selled: false,
    // prueba: {
    //     precio: 12,
    //     nombre: Hola,
    //     selled: false,
    // }
}
const producto2 = {
    precio: 12,
    nombre: 'Hola',
    selled: false,
    prueba1: {
        precio: 12,
        nombre: 'Hola',
        selled: false,

        prueba2: {
            precio: 12,
            nombre: 'Hola22222',
            selled: false,
        }
    }
}
// Destructuring
const {precio,nombre,prueba1} = producto2;

console.log('Esto es prueba 1')
console.table(prueba1)

// Esto ya no se hace
// const precioViejo = producto2.precio;

// Literal Enhancement
// Solo y cuando queramos que las llaves se llamen igual a la variable anterior
const variable1 =1;
const variable2 =2;

const nuevoObjeto ={
    variable1,
    variable2,
}

// Esto ya no se hace
// const variable1 =1;
// const variable2 =2;

// const nuevoObjeto ={
//     variable1:variable1,
//     variable2:variable2,
// }