/*


DATATYPES

NUMBER -> é uma função que converte o valor digitado pelo usuário (que é sempre uma string, ou seja, um texto) em um número.

STRING -> é uma sequência de caracteres, como letras, números, símbolos ou espaços em branco, que são agrupados entre aspas simples (') ou duplas (")


${s} -> As template literals são delimitadas por crase (``)

variavel.lenght -> indica a quantidade de caracteres

variavel.toUPPERCASE() -> transforma em letras maiúsculas

variavel.toLOWERCASE() -> transforma em letras minúsculas

document.write() -> escreve na tela

Number.parseInt e Number.parseFloat -> convertem strings em números

variavel.tofixed(2) -> é uma ferramenta poderosa para formatar números com um número específico de casas decimais. Ele é especialmente útil quando você precisa exibir valores monetários, porcentagens ou qualquer outro tipo de número com uma precisão definida.


*/



 
// faça um programa que converta caracteres em números
var num1 = Number.parseInt(prompt('digite um número :'));
var num2 = Number.parseInt(prompt('digite o segundo número: '));
var soma = num1 + num2;
alert('a soma é ' + soma);




// crie um programa e mostre na tela o resultado usando uma template literal ${} = placeholder 
 var pessoa = 'adriano';
 var idade = 27;
 var nacionalidade = "brasil";
 console.log(`meu nome é ${pessoa} tenho ${idade} anos e moro no ${nacionalidade}`);



// faça um programa que conte a quantidade de caracteres que tem em uma string
var contagemChar = "oi eu sou adriano salvador";
alert(`essa string tem ${contagemChar.length} caracteres !`);


//faça um programa que tranforme a primeira linha de código em letras maiúsculas e a segunda em minúsculas 
var charMaiuscula = "texto maiusculo";
alert(charMaiuscula.toUpperCase());
var charMinusculo = "TEXTO MINÚSCULO";
alert(charMinusculo.toLowerCase());


//faça um programa que escreva qualquer coisa na tela 
document.write('estou escrevendo na tela');


// faça um programa que formate números
var n1 = 1200.3
n1.toFixed(2);
document.write(n1);
