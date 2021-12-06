/*parentNode : retorna o nó pai.
parentElement : retorna o elemento pai.
childNodes : retorna um NodeList com todos os nós filhos.
children : retorna um HTMLCollection com todos os elementos filhos.
firstChild : retorna o primeiro nó filho.
firstElementChild : retorna o primeiro elemento filho.
lastChild : retorna o último nó filho.
lastElementChild : retorna o último elemento filho.
nextSibling : retorna o próximo nó.
nextElementSibling : retorna o próximo elemento.
previousSibling : retorna o nó anterior.
previousElementSibling : retorna o elemento anterior.*/

/* // 1
document.getElementById("elementoOndeVoceEsta");

// 2
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";

// 3
document.getElementById("primeiroFilhoDoFilho").textContent = "Sim me lembro.";

// 4
document.getElementById("pai").firstElementChild;

// 5
document.getElementById("elementoOndeVoceEsta").firstElementChild;

// 6
document.getElementById("elementoOndeVoceEsta").nextSibling;

// 7
document.getElementById("elementoOndeVoceEsta").nextElementSibling;

// 8
document.getElementById("pai").lastElementChild.previousElementSibling;

// parte 2  CONSOLE LOG COMANDOS:
// 1 */

/*
let novoFilhoText = "Estou aqui!";
let novoFilho = document.createElement('section');
novoFilho.innerText = novoFilhoText;
document.querySelector('#pai').appendChild(novoFinho)
*/

// 2 
/*
let filhoNovo2Text = "Mais um filho!";
let novoFilho2 = document.createElement("section");
novoFilho2.innerText = filhoNovo2Text;
document.querySelector("#elementoOndeVoceEsta").appendChild(novoFilho2);
*/

// 3
/* 
let filhoNovo3Text = "Filho do filho!";
let novoFilho3 = document.createElement("section");
novoFilho3.innerText = filhoNovo3Text;
document.querySelector("#primeiroFilhoDoFilho").appendChild(novoFilho3);
*/

// 4
/*
novoFilho3.id = filhoDoFilhoDoFilhoDoFilho;
document.querySelector("#filhoDoFilhoDoFilhoDoFilho").parentElement.parentElement.nextElementSibling;
*/

// 5 
// Remover todos os id dentro de remova todos elementos de #paiDoPai menos #pai #elementoOndeVoceEsta e o #primeiroFilhoDoFilho

let listaFilhos = document.getElementById("pai").childNodes;
console.log(listaFilhos);

for (let i = 0; i < listaFilhos.length; i += 1) {
    let element = listaFilhos[i];
    if (element.id !== "elementoOndeVoceEsta"){
        element.remove();
    }
}