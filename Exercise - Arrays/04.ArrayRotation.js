function solve(arr, num) {
    let array = arr;
    let rotations = Number(num);
    for(let i = 0; i < rotations; i ++){
        let value = array[0];
        array.shift();
        array.push(value);
    }
    console.log(array.join(' '));
}

solve([32, 21, 61, 1,], 4);