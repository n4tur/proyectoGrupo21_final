document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Por favor, complete todos los campos.';
        } else if (password.length < 6) {
            errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        } else {
            errorMessage.textContent = ''; // Limpia el mensaje de error
            alert('Inicio de sesión exitoso');
            loginForm.reset(); // Limpia el formulario
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[action="formulario_contacto"]');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const nombres = contactForm.querySelector('input[placeholder="Ej: Alejandro Fernandez"]').value.trim();
        const apellidos = contactForm.querySelector('input[placeholder="Ej: Dominguez"]').value.trim();
        const email = contactForm.querySelector('input[placeholder="Ej: Alejandro123@outlook.com"]').value.trim();
        const telefono = contactForm.querySelector('input[placeholder="00-15-00000"]').value.trim();
        const pregunta = contactForm.querySelector('textarea').value.trim();

        if (nombres === '' || apellidos === '' || email === '' || telefono === '') {
            alert('Por favor, complete todos los campos obligatorios.');
        } else if (!validateEmail(email)) {
            alert('Por favor, ingrese un email válido.');
        } else if (telefono.length < 7) {
            alert('Por favor, ingrese un teléfono válido.');
        } else {
            alert('Formulario enviado exitosamente');
            contactForm.reset(); // Limpia el formulario
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});


