function breadFactory(input) {
    let energy = 100;
    let coins = 100;
    let array = input.shift().split('|');
    let bankrupt = false;
    for (let i of array) {
        let line = i.split('-');
        let value = Number(line[1]);
        if (line[0] == 'rest') {
            if ((energy + value) <= 100) {
                energy += value;
                console.log(`You gained ${value} energy.`);
                console.log(`Current energy: ${energy}.`);
            }
            else {
                console.log(`You gained ${100 - energy} energy.`);
                energy = 100;
                console.log(`Current energy: ${energy}.`);
            }
        }
        else if (line[0] == 'order') {
            if (energy >= 30) {
                coins += value;
                energy -= 30;
                console.log(`You earned ${value} coins.`);
            }
            else {
                energy += 50;
                console.log('You had to rest!');
            }
        }
        else {
            if (coins > value) {
                console.log(`You bought ${line[0]}.`);
                coins -= value;
            }
            else {
                console.log(`Closed! Cannot afford ${line[0]}.`);
                bankrupt = true;
                break;
            }
        }
    }
    if (!bankrupt) {
        console.log(`Day completed!`);
        console.log('Coins: ' + coins);
        console.log('Energy: ' + energy);
    }
}
breadFactory(['rest-2|order-10|eggs-100|rest-10'])