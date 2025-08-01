function resultadoNumero(){
    const numeroUsuario = Number(document.getElementById('numero').value);
    let numeroSecreto = 71;
    const mensagem = document.getElementById('mensagem');

    if (numeroUsuario < numeroSecreto) {
        mensagem.textContent = "ops, o número secreto é mais alto";
    } else if (numeroUsuario > numeroSecreto) {
        mensagem.textContent = "opa, o número secreto é mais baixo";
    } else {
        mensagem.textContent = "Muito bem, você acertou!";
    }

}

