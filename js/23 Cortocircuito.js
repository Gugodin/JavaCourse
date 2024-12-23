
// Nos habla que todos los valores son verdaderos excepto el 0, el null, el undefined, el NaN y el string vacío.

if (0) {
  console.log('0 es verdadero');
}

if (new Date()) {
  console.log('Fecha es verdadero');
}

if (null) {
  console.log('null es verdadero');
}

if (undefined) {
  console.log('undefined es verdadero');
}


if (NaN) {
  console.log('NaN es verdadero');
}

if (false) {
  console.log('');
}



let user = {
  name: 'Javier',
  greet: function() {
    console.log('Hola, ' + this.name);
  }
};

// Sí, se puede pensar en el operador de corto circuito && como una serie de if anidados.
// Cada expresión se evalúa en secuencia, y si alguna de ellas es falsa, el operador && 
// detiene la evaluación y devuelve ese valor falso. Si todas las expresiones son verdaderas, 
// devuelve el último valor evaluado.

// Usando el operador && para ejecutar una función solo si el objeto y la función existen
user && user.greet(); // 'Hola, Javier'

let anotherUser = null;

// Intentando ejecutar la función greet solo si anotherUser existe
anotherUser && anotherUser.greet(); // No se ejecuta nada porque anotherUser es null