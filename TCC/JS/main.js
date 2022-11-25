/* Voltar a página para cima na imagem da empresa. */

let voltarParaCima = document.querySelector('#home');

voltarParaCima.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

// ---------------------

// Function para abrir o insta no Card

function abrirInsta() {
    let brunoInsta = document.querySelector('.card-1');

    brunoInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/holzbruno/');
    });

    let nataInsta = document.querySelector('.card-2');

    nataInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/xiaohuolong0788/');
    });

    let gabrielInsta = document.querySelector('.card-3');

    gabrielInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/nipponic_ofc/');
    });

    let lucasInsta = document.querySelector('.card-4');

    lucasInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/llukasoliveira/');
    });
}

abrirInsta();