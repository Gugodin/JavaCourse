import hola , { suma as sumaAumentada, restar } from './24 funciones.js';

// (En este caso, el nombre de la función suma se cambia a sumaAumentada)
// (El nombre de la función restar se mantiene igual)
// (La función multiplicar se importa como default, por lo que no se puede cambiar el nombre)

const resultado = hola(10, 20);

console.log(resultado); // 30