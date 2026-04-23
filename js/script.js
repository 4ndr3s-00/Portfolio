const hamburger = document.getElementById('hamburger-btn');
const menu = document.getElementById('main-menu');

// Abrir/cerrar al tocar el botón
hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('open');
});

// Cerrar al tocar fuera del menú
document.addEventListener('click', function () {
    menu.classList.remove('open');
});

// Cerrar al elegir un link
menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('open');
    });
});


const btnVerMas   = document.getElementById('btn-ver-mas');
const btnVerMenos = document.getElementById('btn-ver-menos');
const hiddenCards = document.querySelectorAll('.hidden-card');

let paso = 0;

btnVerMas.addEventListener('click', function () {
    paso++;

    const inicio = (paso - 1) * 3;
    const fin    = paso * 3;
    for (let i = inicio; i < fin; i++) {
        hiddenCards[i].style.display = 'flex';
    }

    if (paso === 2) {
        btnVerMas.classList.add('hidden-btn');
    }

    btnVerMenos.classList.remove('hidden-btn');
});

btnVerMenos.addEventListener('click', function () {
    const inicio = (paso - 1) * 3;
    const fin    = paso * 3;
    for (let i = inicio; i < fin; i++) {
        hiddenCards[i].style.display = 'none';
    }

    paso--;

    if (paso === 0) {
        btnVerMenos.classList.add('hidden-btn');
    }

    btnVerMas.classList.remove('hidden-btn');
});