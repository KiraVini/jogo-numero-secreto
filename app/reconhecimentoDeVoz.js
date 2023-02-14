const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.leng = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    console.log(e.results[0][0].transcript);

    chute = e.results[0][0].transcript;

    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(params) {
    elementoChute.innerHTML = `<div>Você disse 
                                <span class="box">${params}</span></div>`
}

recognition.addEventListener('end', () => recognition.start());