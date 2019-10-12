function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let death = false;
    let roomArr = input.shift().split('|');
    for (let i of roomArr) {
        bestRoom++;
        let line = i.split(' ');
        let room = line[0];
        let value = Number(line[1]);
        if (room === 'potion') {
            potion(value);
        }
        else if (room === 'chest') {
            chest(value);
        }
        else {
            monster(room, value);
            if(death) {
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }
    if(!death) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
    function potion(value) {
        if ((health + value) > 100) {
            console.log(`You healed for ${100 - health} hp.`);
            health = 100;
            console.log(`Current health: ${health} hp.`);
        }
        else {
            health += value;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
    }
    function chest(value) {
        coins += value;
        console.log(`You found ${value} coins.`);
    }
    function monster(room, value) {
        health -= value;
        if (health > 0) { 
            console.log(`You slayed ${room}.`);
        }
        else { 
            console.log(`You died! Killed by ${room}.`);
            death = true;
        }
    }
}
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);