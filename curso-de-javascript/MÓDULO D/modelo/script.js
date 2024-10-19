function carregar() {

    let msg = document.querySelector('#msg')
    let img = document.querySelector('.day')


    let data = new Date()
    let hora = data.getHours()


    msg.innerHTML = `agora são ${hora} horas.`

    if (hora >= 0 && horas < 12) {
        //se for bom dia 
        img.src = 'fotododia.jpg'
        document.body.style.backgroundColor = '#e2cd9f'

    }else if (hora >= 12 && hora < 18) {
        // se for boa tarde
        img.src = 'fotodanoite.jpg'
        document.body.style.backgroundColor = '#b9846f'
    }else{
        //se não é boa noite
        img.src = 'fotodanoite.jpg'
        document.body.style.backgroundColor = '#515154'
    }

}

