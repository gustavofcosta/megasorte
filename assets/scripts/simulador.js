const qtdSorteio = document.querySelector('.qnsorteio');
const qtdAsersorteados = document.querySelector('.qnseremsorteados');
const qtdJogos = document.querySelector('.qjogos');
const btnGerar = document.querySelector('.btn-gerar');
const resultado = document.querySelector('.resu');



function criaLi() {
    const li = document.createElement('li');
    return li;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sorteia() {

    return Math.round(Math.random() * 100)

}

function geraJogos(qtdS, qtdA, qtdJ) {
    const nFinal = Number(qtdS);
    const totalN = Number(qtdA);
    const totalC = Number(qtdJ);

    // aqui vai o regra do simulador

    const sorteados = []
    const combinacoes = []

    while (combinacoes.length < totalC) {
        while (sorteados.length < totalN) {
            const aleatorio = randomNumber(1, nFinal)
            if (sorteados.length === 0) {
                sorteados.push(aleatorio)
            } else if (sorteados.indexOf(aleatorio) > -1) {

            } else {
                sorteados.push(aleatorio)
            }
        }
        combinacoes.push(...sorteados)
    }

    var li = criaLi();
    li.innerHTML = sorteados;
    resultado.appendChild(li);
    console.log(sorteados)
}

btnGerar.addEventListener('click', function () {
    if (!qtdSorteio.value) return;
    if (!qtdAsersorteados.value) return;
    if (!qtdJogos.value) return;
    geraJogos(qtdSorteio.value, qtdAsersorteados.value, qtdJogos.value);
});


