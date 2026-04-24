// Selecciona el botón y el mensaje del DOM
const btnWelcome = document.getElementById('btn-welcome');
const welcomeMsg = document.getElementById('welcome-msg');

// Al hacer clic, muestra u oculta el mensaje de bienvenida
btnWelcome.addEventListener('click', function() {
    if (welcomeMsg.style.display === 'none' || welcomeMsg.style.display === '') {
        welcomeMsg.style.display = 'block';
        btnWelcome.textContent = 'Ocultar';
    } else {
        welcomeMsg.style.display = 'none';
        btnWelcome.textContent = 'Mostrar bienvenida';
    }
});
