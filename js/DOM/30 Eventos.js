const heading = document.querySelector('.heading');

let contador = 0;

heading.addEventListener('click', function() {
    heading.textContent = `Nuevo Heading ${contador}`;
    contador++;
});

heading.addEventListener('mousedown', function() {
    holdTimeout = setTimeout(function() {
        contador = 0;
        heading.textContent = `Nuevo Heading ${contador}`;
    }, 1000); // 1 segundo
});

heading.addEventListener('mouseup', function() {
    clearTimeout(holdTimeout);
});



// Eventos de enlaces  
const enlaces = document.querySelectorAll('.navegacion a');

enlaces[0].addEventListener('click', function(evento) {
    evento.preventDefault();
    // Esto sirve para que no se ejecute el evento por defecto
    // en este caso, que no se redireccione a la página
    console.log('click en enlace1');
    // Con esto vemos que se ejecuta el evento
    // Y podemos acceder al target del evento
    // Con esto podemos hacer cosas como cambiar el texto de un enlace 
    evento.target.style.backgroundColor = 'red';
});
