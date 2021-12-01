//Definindo constantes para exercicios:

const a = 8;
const b = 4;
const c = 6;

//Exercicio 1:

function adicao(num1, num2){
    console.log(num1 + num2);
}

function subtracao(num1, num2){
    console.log(num1 - num2);
}

function multiplicacao(num1, num2){
    console.log(num1 * num2);
}

function divisao(num1, num2){
    console.log(num1 / num2);
}

function modulo(num1, num2){
    console.log(num1 % num2);
}
adicao(a, b);
subtracao(a, b);
multiplicacao(a, b);
divisao(a, b);
modulo(a, b);


//Exercicio 2:
function qualMaior (num1, num2){
    if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}

qualMaior(a, b);
qualMaior(a, c);
qualMaior(b, c);
// console.log(qualMaior(a, b))

//Exercicio 3:
function maiorTodos (num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }else {
        console.log(num3);
    }
}

maiorTodos(a, b, c);
//Exercicio 4:

function positvo(num1){
    if(num1 > 0){
        console.log("positive");
    }
    else if (num1 < 0){
        console.log("negative");
    }else{
        console.log("zero");
    }
}

positvo(a);
positvo(b);
positvo(c);
//Exercicio 5:

function triangulo (num1, num2, num3){
    if (num1 < 0){
        console.log("ERROR");
    }else if (num2 < 0){
        console.log("ERROR");
    }else if (num3 < 0){
        console.log("ERROR");
    }else{
        if(num1 + num2 + num3 === 180){
            console.log(true);
        }else if (num1 + num2 + num3 <= 180){
            console.log(false);
        }
    }
}

triangulo(a, b, c);