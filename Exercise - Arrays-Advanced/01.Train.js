function solve(input) {
    let wagonArr = input.shift().split(' ');
    let capacity = Number(input.shift());
    let commandArr = input;
    for (let i of commandArr) {
        let command = i.split(' ');
        if (command[0] === 'Add') {
            wagonArr.push(command[1]);
        }
        else {
            for (let j = 0; j < wagonArr.length; j++) {
                let sumPassengers = Number(wagonArr[j]) + Number(command[0]);
                if(sumPassengers <= capacity){
                    wagonArr[j] = sumPassengers;
                    break
                }
            }
        }
    }
    console.log(wagonArr.join(' '));
}

solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

);