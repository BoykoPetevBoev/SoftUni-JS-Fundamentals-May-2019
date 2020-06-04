function solve(arr1, arr2) {
    let firstArray = arr1;
    let secondArray = arr2;

    for(let i of firstArray){
        for(let j of secondArray){
            if(i === j){
                console.log(i);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);