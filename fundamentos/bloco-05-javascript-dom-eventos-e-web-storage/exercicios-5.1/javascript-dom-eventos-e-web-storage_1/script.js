        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 // Exercicio 1
function alteraTexto () {
    document.getElementsByTagName("p")[1].textContent = "Me vejo trabalhando na area e estudando em uma graduacao para aumentar meu conhecimento";
}

// Exercicio 2
function alteraCorMain () {
    document.querySelectorAll(".main-content")[0].style.backgroundColor = "rgb(76,164,109)";
}

// Exercicio 3
function alteraCorCenter () {
    document.querySelectorAll(".center-content")[0].style.backgroundColor = "White";
}

// Exercicio 4
function corrigeTitulo () {
    document.getElementsByClassName("title")[0].textContent = "Exercício 5.1 - JavaScript";
    console.log("Titulo corrigido! :)")
}

// Exercicio 5
// Ajuda da Ana Mentoria
function maiuscula () {
    let texto =  document.querySelector("p").innerHTML;
    document.querySelector("p").innerHTML = texto.toUpperCase();
}

// Exercicio 6
function exibe () {
    let exibicao = document.querySelectorAll("section")[0].innerHTML
    for(let i = 0; i < exibicao.length; i += 1){
        exibicao = document.querySelectorAll("p")[i].innerHTML;
        console.log(exibicao)
    }
}