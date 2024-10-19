/*
getFullYear(): Retorna o ano como um número de quatro dígitos (ex: 2023).
getMonth(): Retorna o mês como um número (de 0 a 11), onde 0 representa janeiro.
getDate(): Retorna o dia do mês como um número (de 1 a 31).
getDay(): Retorna o dia da semana como um número (de 0 a 6), onde 0 representa domingo.
getHours(): Retorna a hora (0 a 23).
getMinutes(): Retorna os minutos (0 a 59).
getSeconds(): Retorna os segundos (0 a 59).
*/

let diaAtual = new Date(); 
let daSemana = diaAtual.getDay();

daSemana = 6;

switch(daSemana) {
    case 0:
        alert('domingo')
        break
    case 1:
        alert('segunda')
        break
    case 2:
        alert('terça')
        break
    case 3:
        alert('quarta')
        break
    case 4:
        alert('quinta')
        break
    case 5:
        alert('sexta')
        break
    case 6:
        alert('sabado')
        break
    default:
        alert('mostre o dia atual de hoje')
}