function solve(arr1, arr2) {
    let array = arr1;
    let newArrLength = arr2[0];
    let newArrDelete = arr2[1];
    let searchNum = arr2[2];
    
    let newArr = array.slice(0, newArrLength);
    while(newArrDelete !== 0){
        newArr.shift();
        newArrDelete--;
    }
    let matching = 0;
    for(let i of newArr){
        if(i === searchNum){
            matching++;
        }
    }
    console.log(`Number ${searchNum} occurs ${matching} times.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);