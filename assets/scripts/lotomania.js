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

function geraJogos(qtdJ) {
    const totalC = Number(qtdJ);

    // aqui vai o regra do simulador

    const sorteados = []
    const combinacoes = []
    resultado.innerHTML = ''
    for (var x = 0; x < totalC; x++) {
        while (sorteados.length < 50) {
            const aleatorio = randomNumber(01, 100)
            if (sorteados.length === 0) {
                sorteados.push(aleatorio)
            } else if (sorteados.indexOf(aleatorio) > -1) {

            } else {
                sorteados.push(aleatorio)
            }
        }
        sorteados.sort(function (a, b) { return a - b });
        combinacoes.push([sorteados.slice()])
        sorteados.length = 0
    }

    combinacoes.forEach(function (combinacao) {
        var li = criaLi();
        li.innerHTML = combinacao;
        resultado.appendChild(li);
    })

}

btnGerar.addEventListener('click', function () {
    if (!qtdJogos.value) return;
    geraJogos(qtdJogos.value);
    document.getElementById("displayResultados").style.display = "block"
});


