function solve(input) {
    let houseMembers = input.shift().split('@');
    let jumpArr = input;
    let santaPosition = 0;
    let length = houseMembers.length;
    for (let i of jumpArr) {
        if (i == 'Merry Xmas!') {
            break;
        }
        let line = i.split(' ');
        let jump = Number(line[1]);
        santaPosition += jump;
        if (santaPosition >= length) {
            santaPosition = santaPosition % length;
        }
        if (houseMembers[santaPosition] == 0) {
            console.log(`House ${santaPosition} will have a Merry Christmas.`);
        }
        else {
            houseMembers[santaPosition] -= 2;
        }    
    }
    for (let j = 0; j < houseMembers.length; j++) {
        if(houseMembers[j] == 0){
            houseMembers.splice(j, 1);
            j--;
        }
    }
    if(houseMembers.length == 0){
        console.log(`Santa's last position was ${santaPosition}.`);
        console.log(`Mission was successful.`);
    }
    else {
        console.log(`Santa's last position was ${santaPosition}.`);
        console.log(`Santa has failed ${houseMembers.length} houses.`);
    }
}

solve([ '2@4@2',
'Jump 2',
'Jump 2',
'Jump 8',
'Jump 3',
'Jump 1',
'Merry Xmas!' ]);