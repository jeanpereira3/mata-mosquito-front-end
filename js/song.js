function tocarAudio() {
    // alert('ok')
    //   document.getElementById('tocarSomBotao').click();
    let somFundo = document.createElement('audio')
    somFundo.src = 'songs/song-game-over.mp3'
    somFundo.id = 'audio'
    //somFundo.autoplay = 'autoplay'
    //somFundo.controls = 'controls'
    document.body.appendChild(somFundo)



    let botaoPlay = document.getElementById('tocarSomBotao')
    botaoPlay.click()


}