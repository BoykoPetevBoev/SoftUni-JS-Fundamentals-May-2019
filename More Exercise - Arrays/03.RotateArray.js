function solve(input) {
    let array = input; 
    let rotations = array[array.length - 1];
    array.pop();
    rotations = rotations % array.length;

    let value = 0;
    while(rotations > 0){
        value = array[array.length - 1];
        array.pop();
        array.unshift(value)
        rotations--;
    }
    console.log(array.join(' '));
}

solve([1, 2, 3, 4, 2]);