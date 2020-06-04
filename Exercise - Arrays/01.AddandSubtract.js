function solve(input) {
    let array = input;
    let newArray = [];
    let firstArrSum = 0;
    let secondArrSum = 0;

    for(let i = 0; i < array.length; i ++){
        if(array[i] % 2 == 0){
           newArray.push(array[i] + i);
           secondArrSum += array[i] + i;
        }
        else{
            newArray.push(array[i] - i);
            secondArrSum += array[i] - i;
        }
        firstArrSum += array[i];
    }
    console.log(newArray);
    console.log(firstArrSum);
    console.log(secondArrSum);
}

solve([5, 15, 23, 56, 35]);