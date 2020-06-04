function numbers(arr, nums) {
    let array = arr;
    let bombNum = nums[0];
    let power = nums[1];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === bombNum) {
            let firstIndex = i - power;
            if(firstIndex < 0) {
                firstIndex = 0;
            } 
            array.splice(firstIndex, (power * 2 + 1))
            i = -1;
        }
    }
    for (let j of array) {
        sum += j; 
    }
    console.log(sum);
}
numbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
    )