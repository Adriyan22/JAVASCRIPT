/*


O QUE É DOM ?
Document
Object
Model

*/

/*

ÁRVORE DOM
    window = raiz
    /
location    document)    history
            HTML
         /        \
        HEAD     BODY
        / \       \
    META  TITLE    \
                    \
                    /
            H1, P, P, DIV
                    |
                  STRONG




*/

/*
SELECIONANDO ELEMENTOS EM HTML POR (TAG)
declaração nomedavariavel = global.documento.addportag('p')[posição0]
variavel.estilo.color = 'vermelha';
*/
var addTagP = window.document.getElementsByTagName('p')[0];
addTagP.style.color = 'red';


/*
SELECIONANDO ELEMENTOS EM HTML POR (ID)
variavel nomedavariavel = documento.addporid('id');
variavel.estilo.cordefundo = 'verde';
variavel.textohtml = "texto opcional"
*/
var title = document.getElementById('title');
title.innerText = 'txt alterado com sucesso';


/*

SELECIONANDO ELEMENTOS EM HTM POR (NAME)
declaração nomedavariavel =documento.addpelonomedaclasse('classenome')[posicao0];
variavel.textohtml = "essa string vai ser exibida na pagina html";
*/
var nome = document.getElementsByClassName('name')[0];
nome.innerText = "adicionando pelo nome";


/*

SELECIONANDO POR QUERYSELECTOALL E QUERYSELECTOR
declaração nomedavariavel = documento.addselecao('.classe');
variavel.exibindonohtml = 'exibindo essa str em html ';

 */
var porQuery = document.querySelector('.query');
porQuery.innerText = "selecionando por queryselector";
