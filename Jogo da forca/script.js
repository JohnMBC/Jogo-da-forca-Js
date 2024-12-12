const palavra = "orquidea"
let palavraDigitada = []
palavraDigitada = Array(palavra.length).fill("-")
console.log(palavraDigitada)

// const frutas = ["banana", "laranja", "uva"]
const letraDigitada = "u"

function escreveForca(letraDigitada) {
    if (letraDigitada == "") {

        alert("Digite uma letra")
        return // para a função não ler o que esta abaixo
    }

    letraDigitada = letraDigitada.toLowerCase()

    document.getElementById('letra').value = ""

    for (let index = 0; index < palavra.length; index++) {
        if (palavra[index].toLowerCase() === letraDigitada) {
            palavraDigitada[index] = letraDigitada
            // console.log(`A palavra tem a letra, ${letraDigitada}, na posição ${index}`)

        }
    }
    console.log(palavraDigitada)
}
