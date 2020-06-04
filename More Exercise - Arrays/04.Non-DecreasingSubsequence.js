function solve(input) {
    let array = input;
    let newArray = [array[0]];
    for(let i = 1; i < array.length; i++){
        if(newArray[newArray.length - 1] <= array[i]){
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(' '));
}

solve([2]);