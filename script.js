//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
 // Evitar que se recargue la página
const Formulario = (nombre1, email, mensaje) =>{
    
    event.preventDefault();
    var nombre1 = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    console.log('Nombre: ', nombre1);
    console.log('Correo Electrónico: ', email);
    console.log('Mensaje: ', mensaje);
    alert('Formulario enviado con éxito');

};



        
    