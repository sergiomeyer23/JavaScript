function binarySearch(arr, target){
    // Definir limites
    let low = 0;
    let high = arr.length - 1;

    // Enquanto existir intervalo
    while(low <= high){
        let mid = Math.floor((low+high)/2); // Calcular o meio

        // Comparar
        if (arr[mid] === target){
            return mid;
        }

        // Se o alvo for maior ou menor.
        if(arr[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}


const numbers = [1,3,5,7,9,11,13];
console.log(binarySearch(numbers, 11));