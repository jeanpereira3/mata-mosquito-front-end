var largura = 0
var altura = 0
var vidas = 1
var tempo = 10
var criaMoscaTempo = 1500
var nivel = window.location.search.replace('?', '')
var pontos = 0
var contVelocidade = 0
var fullscreenElement = document.fullscreenElement

//Tempo de criacao de mosca
if (nivel === 'normal') {
    criaMoscaTempo = 1500
} else if (nivel === 'dificio') {
    criaMoscaTempo = 1000
} else if (nivel === 'chucknorris') {
    criaMoscaTempo = 750
} else if (nivel === 'infinito') {
    criaMoscaTempo = 1700
}


function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight
    //console.log(largura, altura);
}

ajustaTamanhoPalcoJogo()


function dificuldadeProgrevisa() {
    clearInterval(criaMosca)
    criaMosca = setInterval(() => {
        posicaoRandomica()
    }, criaMoscaTempo);
}


var cronometro = setInterval(() => {
    if (nivel === 'infinito') {
        document.getElementById('cronometro').innerHTML = '&infin;'
    } else {
        tempo--
        if (tempo < 0) {
            clearInterval(cronometro)
            clearInterval(criaMosca)
            window.location.href = 'vitoria.html'
        } else {
            document.getElementById('cronometro').innerHTML = tempo
        }

    }


}, 1000);

function posicaoRandomica() {

    //remover vidas e logica do fin de jogo
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas++).src = "images/coracao_vazio.png"
        }


    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    //console.log(posicaoX, posicaoY);


    //Criar o elemento Html
    var mosca = document.createElement('img')
    mosca.src = 'images/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    document.body.appendChild(mosca)
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.src = 'images/splash_red.png'
        this.id = 'splash'
        var splash = setTimeout(() => {
            this.remove()
        }, 400);
        pontos++
        document.getElementById('pontos').innerHTML = pontos
        //Diminui cria mosca tempo
        contVelocidade++
        if (contVelocidade == 10) {
            criaMoscaTempo -= 200
            dificuldadeProgrevisa()

            console.log(criaMoscaTempo);
            contVelocidade = 0
        }


    }


}



function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    //console.log(classe);
    switch (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'

    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}


