function solve(input) {
    let field = input.shift().split('@').map(Number);
    let fieldLength = field.length - 1;
    let end = input.pop();
    let position = 0;
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let jumps = Number(commands[1]);
        for (let n = 1; n <= jumps; n++) {
            position ++;
            if (position > fieldLength) {
                position = 0;
            }
        }
        if (field[position] === 0) {
            console.log(`House ${position} will have a Merry Christmas.`)
            continue;
        }
        field[position] -= 2;
    }
    console.log(`Santa's last position was ${position}.`)
    let total = field.reduce((a, b) => a + b, 0);
    if (total === 0) {
        console.log(`Mission was successful.`)
    } else {
        let count = 0;
        for (let p of field) {
            if (p !== 0) {
                count++
            }
        }
        console.log(`Santa has failed ${count} houses.`)
    }
}
solve([ '2@4@2',
'Jump 2',
'Jump 2',
'Jump 8',
'Jump 3',
'Jump 1',
'Merry Xmas!' ]);