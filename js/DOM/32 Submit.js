

const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    console.log('Enviando formulario...');
    
    const alertaFormulario = document.querySelector('#alertaFormulario');
    console.log(`Alerta existe? ${alertaFormulario}`);
    alertaFormulario && alertaFormulario.remove();

    // Recomendación: Usar FormData para enviar los datos del formulario
    // Solamente asegurate de que el atributo 'name' de los inputs esté definido
    // const formData = new FormData(formulario);
    // console.log(formData.get('nombre'));
    // console.log(formData.get('password'));
    
    // Otra forma de obtener los datos del formulario
    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    
    const alerta = document.createElement('DIV');
    alerta.textContent = 'Contenido de alerta';
    alerta.classList.add('alerta', 'text-sm','text-white', 'text-center', 'p-2','uppercase', 'font-bold', 'mt-2');
    alerta.id = 'alertaFormulario';
    // validar formulario
    if(nombre.trim() === '' || password.trim() === '') {
        alerta.classList.add('bg-red-500');
        alerta.textContent = 'Todos los campos son obligatorios';
    }else {
        console.log('Formulario válido');
        alerta.classList.add('bg-green-500');
        alerta.textContent = 'Formulario válido';
    }
    
    console.log(alerta);
    formulario.appendChild(alerta);
});
