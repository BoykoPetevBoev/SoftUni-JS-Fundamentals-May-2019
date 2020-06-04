function solve(input) {
    let array = input;
    let newArray = [array[0]];
    let newArrayPosition = 0;
    let equalsNums = 1;
    let biggestEquals = 0;
    let elements = array[0];
    let result = '';

    for (let i = 1; i < array.length; i++) {
        if (newArray[newArrayPosition] == array[i]) {
            equalsNums++;
            elements+= ' ' + array[i]; 
        }
        else {
            newArray.push(array[i]);
            newArrayPosition++;
            equalsNums = 1;
            elements = array[i];
        }
        if (biggestEquals < equalsNums) {
            biggestEquals = equalsNums;
            result = elements;
        }
    }
    console.log(result)
}

solve([4, 4, 4, 4])