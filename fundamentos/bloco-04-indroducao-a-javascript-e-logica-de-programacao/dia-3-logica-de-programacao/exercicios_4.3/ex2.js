/*Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****
*/
//Definimos a constante n com o valor de asteriscos que queremos imprimir
const n = 5;


let print = "";

//Definimos a repeticao do loop para que possamos multiplicar quantas vezes queremos imprimir o '*'
for (let i = 1; i <= n; i+=1){
    //Criamos a adicao do '*' dentro da variavel print para cara * que queremos imprimir
    print += "*"
    //Imprimimos o print com a quantidade i de '*' por n colunas
    console.log(print);
}