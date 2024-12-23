const inputNombre = document.querySelector('#nombre');

inputNombre.addEventListener('input', function(evento) {
    console.log('Escribiendo...');
    console.log(evento.target.value);
});

const inputPassword = document.querySelector('#password');

inputPassword.addEventListener('input', functionPassword);

function functionPassword(evento) { 
    inputPassword.type = 'text';

    setTimeout(() => {
        inputPassword.type = 'password';
    }, 1000);
}