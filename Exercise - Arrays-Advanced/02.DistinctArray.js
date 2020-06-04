function solve(input) {
    let array = input;
    let newArray = array.slice(0);
    let finalArray = [];
    repeatingNums(array);
    result(newArray);
    console.log(finalArray.join(' '));
    function repeatingNums(array){
        for (let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length; j++){
                if(array[i] === newArray[j] && i < j){
                    newArray[j] = 'None';
                }
            }
        }
        return newArray;
    }
    function result(newArray){
        for(let i of newArray){
            if(i !== 'None'){
                finalArray.push(i);
            }
        }
        return finalArray;
    }
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);