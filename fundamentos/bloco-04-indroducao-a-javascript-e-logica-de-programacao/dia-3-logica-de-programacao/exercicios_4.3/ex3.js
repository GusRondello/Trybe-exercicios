/*3- Agora inverta o lado do triângulo. Por exemplo:
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
let posicao = n;

//Definimos a repeticao do loop para que possamos multiplicar quantas vezes queremos imprimir o ' ' antes de imprimirmos o "*"
for (let i = 0; i < n; i+=1){
    //Definimos uma repticao para acharmos as posicoes j na variavel posicao da linha de "*****"
    for(let j = 0; j <= n; j+=1){
        //Se o "j" for menor que a posicao total entao imprimimos um " "
        if( j < posicao){
            print += " ";
        }
        //Se nao for entao imprimimos um "*" para inverter o triangulo
        else {
            print +="*"
        }
    }
    //Imprimimos entao a linha i com a quantidade de " " e "*" desejada
    console.log(print);
    //Setamos o print para uma string vazia novamente para que possamos imprimir a proxima linha nele
    print = "";
    //Diminuimos em 1 a posicao para que o j altere a quantidade de " " e "*" impressos
    posicao = posicao - 1;
}

