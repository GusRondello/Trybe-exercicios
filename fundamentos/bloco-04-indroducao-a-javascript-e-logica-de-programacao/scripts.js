let concorrente = "asdwedxc"

switch(concorrente){
    case "aprovado":
        console.log("Parabéns você foi aprovado!");
        break;
    case "lista":
        console.log("Você se encontra na lista de espera.");
        break;
    case "reprovada":
        console.log("Sinto muito, você não foi aprovado. :(");
        break;
    default:
        console.log("Não se aplica");
}