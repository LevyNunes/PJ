const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function transformaSegundos(segundos) {
    const tempo = new Date(segundos * 1000);
    return tempo.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = transformaSegundos(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function() {
    iniciaRelogio();
    relogio.classList.remove('pausado');
})

pausar.addEventListener('click', function() {
    clearInterval(timer);
    relogio.classList.add('pausado');
})

zerar.addEventListener('click', function() {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('pausado');
})