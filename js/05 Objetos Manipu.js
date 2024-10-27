// Manipulacion de objetos

const producto = {
    precio: 12,
    nombre: 'Hola',
    disponible: false,
}
// Esto realiza que el objeto no podra ser modificado
// Object.freeze(producto)

// SOLO permite modificar las propidades existentes
// Object.seal(producto)

// Modificar
producto.disponible = true;
// Agregar
producto.imagen = 'imagen.jpg';
// Eliminar
delete producto.nombre

console.log(producto)