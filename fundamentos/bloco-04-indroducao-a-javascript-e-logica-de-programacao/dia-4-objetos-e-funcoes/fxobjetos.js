let player = {
    name : "Marta",
    lastName : "Silva",
    age : 34,
    medals : { 
        gold : 2,
        silver : 3,
    }
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem" + player.age + " anos de idade.");

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
let melhorDoMundo = player["bestInTheWorld"].length;

console.log ("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + melhorDoMundo + " vezes.")

console.log("A jogadora possui " + player.medals["gold"] + " medalhas de ouro e " + player["medals"]["silver"] + " medalhas de prata.");