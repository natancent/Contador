function calcular() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById("passo")
    let res = document.getElementById("resultado")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
        alert('Preencha todos os campos')
    else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {

            res.innerHTML += ` ${c} \u{1F449}`




        }
        if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}\n`

        } else {
            res.innerHTML += `\u{1F3C1}`
        }
    }
}

function limpar() {
    document.getElementById('inicio').value = ''
    document.getElementById('fim').value = ''
    document.getElementById('passo').value = ''
    document.getElementById('resultado').innerHTML = "Contagem:"
}
