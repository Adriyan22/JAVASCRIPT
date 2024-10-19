function verificar() {


    let data = new Date(); 
    let ano = data.getFullYear(); 


    let fAno = document.querySelector('#textano'); 
    let res = document.querySelector('#res');

    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] verifique os dados e tente novamente');
    }else{
        let sexF = document.getElementsByName('radsex');
        let idade = ano - Number(fAno.value);
        let genero = ""

        let img = document.createElement('img');
        img.setAttribute('id', 'foto');



        if (sexF[0].checked) {
            genero = 'homem';
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançamasc.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmasc.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulta.jpg')
            }else{
                //idoso
                img.setAttribute('rc', 'idoso.jpg')
            } set



        }else if (sexF[1].checked) {
            genero = 'mulher';
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançafem.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemfem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('mulheradulta.jpg')
            }else{
                //idoso
                img.setAttribute('src' , 'idoso.jpg')
            }
        }
        res.style.textAlign =' center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}