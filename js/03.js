// Tipos de datos

// Undefined
let client
console.log(typeof client )

// String 
const text = 'Hola'
console.log(typeof text )

// Number float e int son lo mismo
const numero = 4
console.log(typeof numero )

// BigInt
const numeroGrande = BigInt(1912891283312013298213091)
console.log(typeof numeroGrande )

// Boolean
const apagador = true
console.log(typeof apagador )

// Null
const descuento = null
console.log(typeof descuento )

/*
    ¿Cual es la diferencia entre null y undefined?
    Undefined => Una variable que literalmente no ha sido definida con algun valor.
    Null => Variable a la que se le dio el valor exacto de null para denotar que no tiene nada la variable.
*/

// Symbol
const simbol = Symbol(30)
console.log(typeof simbol )


