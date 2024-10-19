function verificandoDados() {
    let emailCliente = "adriano@gmail.com"
    if (emailCliente != "adriano@gmail.com") {
        document.getElementById('resposta').innerHTML = '<p>credenciais <strong>corretas</strong>'
    }else{
        document.getElementById('resposta').innerHTML = '<strong>desculpe, digite seus dados novamente</strong>'
    }
}