function solve(arr, n) {
    let array = arr;
    let num = Number(n);

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] + array[j] == num && i < j){
                console.log(array[i] + ' ' + array[j]);
            }
        }
    }  
}

solve([1, 7, 6, 2, 19, 23], 8);