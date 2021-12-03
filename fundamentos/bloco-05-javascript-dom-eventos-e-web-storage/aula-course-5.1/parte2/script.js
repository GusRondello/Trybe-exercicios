const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.querySelector("#page-title").innerText = "Star Wars ep V - O imperio contra ataca";

document.querySelector("#subtitle").innerText = "A long Time ago, In a galaxy far far away...";
const subtitle = document.getElementById("subtitle");
subtitle.style.color = "blue";


document.querySelector("#second-paragraph").innerHTML ="É um período crítico para as Forças Rebeldes. Embora a Estrela da Morte tenha sido destruída, as Tropas Imperiais conseguem expulsar os Rebeldes de sua base secreta e os perseguem por toda a galáxia.Fugindo da terrível Frota Imperial, um grupo de Rebeldes chefiados por Luke Skywalker, estabelece uma nova base secreta no remoto mundo gelado de Hoth. O senhor do mal, Lorde Darth Vader, obcecado pela idéia de encontrar o jovem Skywalker, enviou milhares de sondas remotas para os pontos mais longínquos do espaço....";
const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.style.color = "Yellow";

console.log(document.getElementsByClassName("paragrafo"));

document.querySelectorAll(".paragrafo")[0].style.color = "green";

document.querySelector("h4").style.color = "red";