
const enlaces = document.querySelectorAll('.navegacion a');
const heading = document.querySelector('.heading');



heading.textContent = 'Nuevo Heading';
heading.id = 'nuevo-id';

heading.removeAttribute('id');
// heading.removeAttribute('class'); Remueve las clases del elemento



const inputNombre = document.querySelector('#nombre');

inputNombre.value = 'Juan';