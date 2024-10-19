
let pais = document.querySelector('#confirma')

function mostrarPais(){
    let condicao = "brasil"
    if (condicao =! "brasil"){
        pais.innerHTML = '<h2>sou<strong> brasileiro</strong></h2>'
    }else{
        pais.innerHTML = '<h2>não sou brasileiro</h2>'
        pais.style.backgroundColor = 'black'
        pais.style.color = 'white'
    }
}
