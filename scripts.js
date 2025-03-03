

let imagem = document.querySelector(".troca-imagem")

function trocaImagem() { 
    console.log("Trocar imagem")
    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    }
    else {
        imagem.style.opacity = 0
    }
}

setInterval(trocaImagem, 2000)












