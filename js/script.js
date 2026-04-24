// Select the button and the message from the DOM
const btnWelcome = document.getElementById('btn-welcome');
const welcomeMsg = document.getElementById('welcome-msg');

// Clicking it shows or hides the welcome message
btnWelcome.addEventListener('click', function() {
    if (welcomeMsg.style.display === 'none' || welcomeMsg.style.display === '') {
        welcomeMsg.style.display = 'block';
        btnWelcome.textContent = 'Ocultar';
    } else {
        welcomeMsg.style.display = 'none';
        btnWelcome.textContent = 'Mostrar bienvenida';
    }
});
