// Gera número secreto com math.random
const numeroSecreto = Math.floor(Math.random() * 100) + 1;  
let tentativas = 0;
const maxTentativas = 10;

// Chama a função
function resultadoNumero(){
    const numeroUsuario = Number(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');

// Verifica se o número é válido
     if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
        return;
    }
    tentativas++;

// Verifica o número de tentativas
     if (tentativas >= maxTentativas) {
        mensagem.textContent = `Desculpa, você atingiu o número máximo de ${maxTentativas} tentativas. O número secreto era ${numeroSecreto}`;
        document.getElementById('numero').disabled = true;
        return;
    }

// Conta o número de tentativas e revela resultado
    if (numeroUsuario < numeroSecreto) {
        mensagem.textContent = `tentativas ${tentativas} ops, o número secreto é mais alto`;
    } else if (numeroUsuario > numeroSecreto) {
        mensagem.textContent = `tentativas ${tentativas} opa, o número secreto é mais baixo`;
    } else {
        mensagem.textContent = `tentativas ${tentativas} Muito bem, você acertou!`;
    }

}

