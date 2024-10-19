/*

    QUESTÃO 01 - para que serve o operador % em js ? seria para calcular porcentagem ?
    r: operador de resto de divisão

    QUESTÃO 02 - 6 + 4 / 2 é igual a 5 ou 8 ?
    r: 8

    QUESTÃO 03 - se uma variável n está valendo 10 e executamos um n += 5, qual será seu novo valor ?
    r: 15

    QUESTÃO 04 - para que servem os operadores ++ e -- ?
    r: ++, incrementa
    --, subtrai

 */


//sintaxe de operadores relacionais
let a = 30;
let b = '30';
let c = a === b;
document.getElementById('op-relacionais').innerHTML = c;

//sintaxe de operadores lógicos
let num1 = 25;
let num2 = 22;
document.getElementById('op-logicos').innerHTML = (num1 == 10 || num2 == 22);

//sintaxe de precendencia de operadores lógicos
let v1 = 100;
let v2 = 200;
document.getElementById('op-logic-precedencia').innerHTML = (v1 >= 100 && v2 <= 200);

//sintaxe de todos os operadores em uma expressão
let n1 = 2;
let n2 = 4;
let n3 = 6; 
let resultado = (n1 == 3 % 2 && n2 == 4 || n3 > n1 && n3 > n2);
document.getElementById('group-ops').innerHTML = resultado;

//sintaxe de operador ternário
let x = 1000;
let tr = x < 999?"verdadeiro":"falso"
document.getElementById('op-ternario').innerHTML = tr;