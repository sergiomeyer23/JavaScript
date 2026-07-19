/*Crie um array com 10 números e imprima todos eles.
Encontre o maior número do array.
Encontre o menor número.
Some todos os elementos.
Conte quantos números são pares.
Crie um novo array contendo apenas os números pares (filter).
Crie outro array com o dobro de cada número (map).*/

var arr = [2,5,6,7,3,9,5,1,8,10];
let maior = arr[0];
let menor = arr[0];


function maiornumero(array,maior){
    for (var i=0; i<array.length; i++){
        if(array[i]>maior){
            maior = array[i];
        }
    }
    return maior;
}

function menornumero(array, menor){
    for (var i=0; i<array.length; i++){
        if(array[i]<menor){
            menor = array[i];
        }
    }
    return menor;
}

function somartodos(array){
    let soma = 0;

    for(var i = 0; i<array.length; i++){
        soma += array[i];
    }
    return soma
}

function contarpares(array){
    let qtdpares = 0;
    for(var i = 0; i<array.length; i++){
        if(array[i]%2 === 0){
            qtdpares += 1;
        }
    }
    return qtdpares;
}

const filterednumbers = arr.filter(item => item % 2 === 0);

const dobro = arr.map(item => item * 2);

for(let i=0;i<arr.length;i++){

    console.log(arr[i]);

}

console.log(contarpares(arr));
console.log(filterednumbers);
console.log(array);