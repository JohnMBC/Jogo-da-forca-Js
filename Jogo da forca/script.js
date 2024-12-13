const palavras = [
    {
        "palavra": "carambola",
        "dica": "fruta"
    },

    {
        "palavra": "arroz",
        "dica": "alimento"
    },

    {
        "palavra": "elefante",
        "dica": "animal"
    },

    {
        "palavra": "basquete",
        "dica": "esporte"
    }
]
const randomIndex = Math.floor(Math.random() * palavras.length);
const palavra = palavras[randomIndex].palavra
const dica = palavras[randomIndex].dica
console.log(dica)


// const palavra = "orquidea"
let palavraDigitada = []
palavraDigitada = Array(palavra.length).fill("-")
console.log(palavraDigitada)
const maximoTentativas = 4
let tentativaRestante = maximoTentativas



function escreveForca(letraDigitada) {
    if (verificaFinal()) {
        return
    }

    if (letraDigitada == "") {

        alert("Digite uma letra")
        return // para a função não ler o que esta abaixo
    }

    letraDigitada = letraDigitada.toLowerCase()


    document.getElementById('letra').value = ""

    if (palavra.indexOf(letraDigitada) == (-1)) {
        alert("Letra não encontrada")
        tentativaRestante--
        console.log("Te restam", tentativaRestante, "Tentativas")
        return
    }


    for (let index = 0; index < palavra.length; index++) {
        if (palavra[index].toLowerCase() === letraDigitada) {
            palavraDigitada[index] = letraDigitada
            // console.log(`A palavra tem a letra, ${letraDigitada}, na posição ${index}`)

        }
    }
    // console.log(tentativaRestante)
    console.log(palavraDigitada)
}

function verificaFinal() {
    if (tentativaRestante <= 0) {
        console.log("Vc perdeu")
        return false
    }

    if (palavraDigitada.indexOf("_") == -1) {
        console.log("Vocé ganhou")
        return false
    }

    return true
}







