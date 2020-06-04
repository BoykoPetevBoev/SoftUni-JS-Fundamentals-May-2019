function solve(input) {
    let arrayCmd = input;
    let newArray = [];
    let command = '';
    for (let i = 0; i < arrayCmd.length; i++) {
        command = arrayCmd[i];
        if (command === 'add') {
            newArray.push(i + 1);
        }
        else if (command === 'remove') {
            newArray.pop();
        }
    }
    if (newArray.length === 0) { 
        console.log('Empty')
    }
    else {
        console.log(newArray.join(' '));
    }
}

solve(['remove', 'remove', 'remove']);