function solve(input) {
    let array = input;
    let result = '';
    let biggestNum = 0;
    let position = 0;
    while(array.length > 0) {
        for (let j = 0; j < array.length; j++) {
            if (biggestNum <= array[j]) {
                biggestNum = array[j];
                position = j;
            }
        }
        result += biggestNum + ' '; 
        for(let x = 0; x <= position; x++){
            array.shift();
            biggestNum = 0;
        }

    }
    console.log(result);
}
solve([27, 19, 42, 2, 13, 45, 48]);