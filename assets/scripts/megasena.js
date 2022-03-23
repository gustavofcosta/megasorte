function simulador() {

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

    function geraJogos(qtdA, qtdJ) {
        const totalN = Number(qtdA);
        const totalC = Number(qtdJ);

        // aqui vai o regra do simulador

        if (totalN <= 60) {

            const sorteados = []
            const combinacoes = []
            resultado.innerHTML = ''
            for (var x = 0; x < totalC; x++) {
                while (sorteados.length < totalN) {
                    const aleatorio = randomNumber(01, 60)
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
        } else {
            alert('A quantidade de números a serem sorteados não pode ser maior que a quantidade de números do sorteio!')
            resultado.innerHTML = ''
        }
    }

    document.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            btnGerar.click()
        }
    })

    btnGerar.addEventListener('click', function () {
        if (!qtdAsersorteados.value) return;
        if (!qtdJogos.value) return;
        geraJogos(qtdAsersorteados.value, qtdJogos.value);
        document.getElementById("displayResultados").style.display = "block"
    });
}

const inicia = simulador()
