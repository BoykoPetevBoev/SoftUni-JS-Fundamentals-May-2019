function solve(input) {
    let array = input;
    let noResult = true;

    if (array.length == 1) {
        console.log(0);
    }
    else if (array.length == 2) {
        console.log('no');
    }
    else {
        for (let i = 0; i < array.length; i++) {
            let leftSum = 0;
            let rightSum = 0;
            for (let left = 0; left < i; left++) {
                leftSum += array[left];
            }
            for (let right = array.length - 1; right > i; right--) {
                rightSum += array[right];
            }
            if(leftSum == rightSum){
                console.log(i);
                noResult = false;
                break;
            }
        }
        if(noResult){ 
            console.log('no')
        }
    }
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);