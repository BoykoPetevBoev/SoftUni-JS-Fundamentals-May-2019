function solve(input) {
    let array = input;
    let step = Number(array[array.length - 1]);
    let newArray = [];
    for(let i = 0; i < array.length - 1; i += step){
        newArray.push(array[i]);
    }
    console.log(newArray.join(' '));
}
solve(['5', '20', '31', '4', '20', '2']);