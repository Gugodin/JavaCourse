// Destructuring de uno o mas objetos
const producto = {
    precio: 12,
    nombre: 'Hola',
    selled: false,
}

const cliente = {
    nombre: 'Juan antonio',
    premium: false,
    direccion:  {
        calle: 'asdsadsad'
    }
}

// Con : renombramos la variable para que no tengamos problemas con el renombramiento de la variable
const {nombre} = producto;
const { nombre : nombreCliente , direccion: {calle: nombreDeCalle} } = cliente;




