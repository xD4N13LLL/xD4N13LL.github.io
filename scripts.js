// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Registro de usuario
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener los datos del formulario
            const name = document.getElementById('name').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;

            // Crear el objeto de usuario
            const user = {
                name,
                username,
                password,
                phone,
                email
            };

            // Guardar el usuario en localStorage
            localStorage.setItem('user', JSON.stringify(user));

            alert('Registro exitoso. Ahora puedes iniciar sesión.');

            // Redirigir a la página de inicio de sesión
            window.location.href = 'login.html';
        });
    }

    // Iniciar sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener los datos del formulario
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Obtener los datos del usuario desde localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser) {
                // Verificar si el nombre de usuario y la contraseña coinciden
                if (storedUser.username === username && storedUser.password === password) {
                    alert('Inicio de sesión exitoso.');

                    // Almacenar nombre de usuario en sessionStorage para la sesión actual
                    sessionStorage.setItem('username', username);

                    // Redirigir a la página de bienvenida
                    window.location.href = 'bienvenido.html';
                } else {
                    alert('Nombre de usuario o contraseña incorrectos.');
                }
            } else {
                alert('No hay ningún usuario registrado.');
            }
        });
    }

    // Mostrar el nombre de usuario en la página de bienvenida
    const welcomeUserElement = document.getElementById('welcomeUser');
    if (welcomeUserElement) {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            welcomeUserElement.textContent = storedUsername;
        }
    }

    // Funcionalidad de cerrar sesión
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Eliminar los datos de sesión
            sessionStorage.removeItem('username');
            // Redirigir a la página de inicio de sesión
            window.location.href = 'login.html';
        });
    }
});
