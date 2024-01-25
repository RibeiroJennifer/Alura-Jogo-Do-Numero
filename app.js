let listaDeNumerosSorteados = []

let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;



// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML= 'Escolha um numero entre 1 e 10'; 
// é o mesmo esquema daí debaixo

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
//serve para falar o que tem de escrito no seu site
responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
{rate: 1.2} ); 
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    // alert(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentaiva = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ('Você descobriu o número secreto com ' + tentativas + palavraTentaiva);
        exibirTextoNaTela('p', mensagemTentativas);
        
        //pegando o id do botão de novo jogo para ativar ele após vencer o jogo
        //e removeAttribute, está retirando o atributo disable, assim ativando ele
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');
        }   else {
        exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        // tentativas = tentativas + 1;
        tentativas++

        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        //push funciona pegando o parametro e colocando ele ao final da lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

// toda vez q errar, vai limpar o campo do numero
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
// função para começar o jogo novamente

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //desabilitar o botão para não começar o jogo até terminar
    document.getElementById('reiniciar').setAttribute('disabled', true)
}