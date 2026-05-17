const miniaturas = document.querySelectorAll('.foto-miniatura');
const fotoPrincipal = document.getElementById('fotoPrincipal');
const listaImagens = [];

miniaturas.forEach(miniatura => {
    const url = miniatura.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    listaImagens.push(url);
});

let indexAtual = 0;
let temporizador;

function atualizarGaleria() {
    fotoPrincipal.style.backgroundImage = `url('${listaImagens[indexAtual]}')`;
    miniaturas.forEach((miniatura, index) => {
        if (index === indexAtual) {
            miniatura.classList.add('ativa');
        } else {
            miniatura.classList.remove('ativa');
        }
    });
}

function selecionarFoto(index) {
    indexAtual = index;
    atualizarGaleria();
    reiniciarTemporizador();
}

function mudarFoto(direcao) {
    indexAtual += direcao;
    if (indexAtual >= listaImagens.length) {
        indexAtual = 0;
    }
    if (indexAtual < 0) {
        indexAtual = listaImagens.length - 1;
    }
    atualizarGaleria();
    reiniciarTemporizador();
}

function iniciarCarrosselAutomatico() {
    temporizador = setInterval(() => {
        mudarFoto(1);
    }, 4000);
}

function reiniciarTemporizador() {
    clearInterval(temporizador);
    iniciarCarrosselAutomatico();
}

atualizarGaleria();
iniciarCarrosselAutomatico();