/*
getFullYear(): Retorna o ano como um número de quatro dígitos (ex: 2023).
getMonth(): Retorna o mês como um número (de 0 a 11), onde 0 representa janeiro.
getDate(): Retorna o dia do mês como um número (de 1 a 31).
getDay(): Retorna o dia da semana como um número (de 0 a 6), onde 0 representa domingo.
getHours(): Retorna a hora (0 a 23).
getMinutes(): Retorna os minutos (0 a 59).
getSeconds(): Retorna os segundos (0 a 59).
*/

let atual = new Date();
let hora = atual.getHours();

if (hora == 19) {
    alert('bom dia')
}else if (hora <= 20) {
    alert('boa tarde')
}else{
    alert('boa noite')
}