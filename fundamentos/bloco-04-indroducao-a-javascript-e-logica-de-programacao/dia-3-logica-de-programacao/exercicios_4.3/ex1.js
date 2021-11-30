/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5
*****
*****
*****
*****
*****
*/

//Definimos a constante n com o valor de asteriscos que queremos imprimir
const n = 5;


let print = "";

//Definimos a repeticao do loop para que possamos multiplicar quantas vezes queremos imprimir o '*'
for (let i = 1; i <= n; i+=1){
    //Criamos a adicao do '*' dentro da variavel print para cara * que queremos imprimir
    print += "*"
}
//Com isso o print fica com o valor de "*****", pois foi adicionado n "*" a seu valor inicial
//Definimos a repeticao de linhas que queremos imprimir n colunas da variavel print
for (i = 1; i <= n; i+=1){
    //Imprimimos n linhas para cada variavel print, montando um quadrado 
    console.log(print);
}
