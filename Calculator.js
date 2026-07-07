const readline = require('readline-sync')

function sum(num1, num2){
    return num1+num2;
}

function sub(num1, num2){
    return num1-num2;
}

function mult(num1, num2){
    return num1*num2;
}

function div(num1, num2){
    return num1/num2;
}

let num1 = readline.question("Write a number: ");
let num2 = readline.question("Write another number: ");

console.log(num1, num2);