function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        alert('[ERRO] faltam dados !')
    }else{
        res.innerHTML = 'contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; i <= f; c += p) {
            res.innerHTML = `${c} \u{1f449}`
        }
        res.innerHTML =+ `\u{1f3c1}`
        }else{
            for (let c = i; c >= f; c -= p ) {
                res.innerHTML += `${c} \u{1f449}` 
            }
        }
        res.innerHTML += `\u{1f3c1}` 
    }
}
