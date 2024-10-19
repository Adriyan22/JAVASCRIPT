/*

    OPERADORES 

1 - ARITIMÉTICOS:
    (+): soma
    (-): subtração
    (*): multiplicação
    (/): divisão
    (%): resto da divisão
    (**): potência , elevado

3 - ORDEM DE PRECEÊNCIA DOS OPERADORES ARITIMÉTICOS ;
    (): que vem primeiro
    (**): que vem primeiro
    (*, /, %): tem a mesma ordem de precedência
    (+, -): tem a mesma ordem de precedência

2.0 - ATRIBUIÇÃO SIMPLES ;
    (EX):
    var a = 5 + 3 -> 8
    var b = a % 5 -> 3
    var c = 5 * ¹[b**2] -> 45
    var d = ²10 / ¹[a/2] -> 6
    var e = ¹[6*2] /d -> 2
    var f = ¹[b%e] ³+ ²[4/e] -> 3

2.1 - AUTO - ATRIBUIÇÔES;
    var n = 3;
    n = n + 4;
    n = n - 5;
    n = n * 4;
    n = n / 2;
    n = n**2;
    n = n % 5;

2.2 - SIMPLIFICANDO;
    += : recebe a própria variável (ex: n += 4)
    -=
    *=
    /=
    **=
    %=


2.3 - INCREMENTO;

    PRÉ-INCREMENTO: 
    variavel++ : quando a variavel vem antes do incremnto.
    variavel-- : quando a variavel vem antes do decremento.

    ++ = incrementa : adiciona 1 ao valor da variável.
    -- = decrementa : subtrai 1 do valor da variável.

    OUTROS EXEMPLOS DE INCREMENTO :
    variavel = variavel + 1 : add mais 1 valor a variavel.
    variavel = variavel - 1 : subtrai 1 valor da variavel.




3 - relacionais
4 - lógicos
5 - ternário


 */


//faça um programa que calcule o valor da compra e mostre o valor do troco usando qualquer operdor aritimético.
var dinheiroEmMaos = 500;
var totalDaCompra = 300;
var troco = dinheiroEmMaos - totalDaCompra;
alert(`total da compra r$${totalDaCompra} troco recebido ${troco} !`);


//faça uma conta utilizando ordem de precedência aritimética.
var numero = 3;
var numero1 = 4;
var numero2 = 5;

var total = (3 * 4) - 5;
alert(total);

// de um exemplo em atribuição simples ?
var vr1 = 10 + 10;
var vr2 = vr1 / 2;
var vr3 = vr2 ** 2;
alert(vr1);
alert(vr2);
alert(vr3);


// de um exemplo de auto atribuição
var valor = 5;
valor = valor + 2;
console.log(valor);


//faça um programa utilizando simplificação
var x = 10;
x += 2;
console.log(x);

//faça um programa que adicione um valor e outro removendo um valor usando incremento e decremento 
var n1 = 25;
n1++;
var n2 = 30;
n2--;
console.log(n1);
console.log(n2);


//faça um programa utilizando pré-incremento e pré-decremento
var y = 3;
++y;
var z = 1;
--z;
document.getElementById('teste').innerHTML = y;
document.getElementById('teste2').innerHTML = z;
