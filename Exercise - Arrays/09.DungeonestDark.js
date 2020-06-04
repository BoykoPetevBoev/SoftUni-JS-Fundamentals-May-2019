function solve(input) {
    let arrayOfRooms = input[0].split('|');
    let room = [];
    let health = 100;
    let coins = 0;
    let win = true;
    for(let i = 0; i < arrayOfRooms.length ; i++){
        room = arrayOfRooms[i].split(' ');
        
        if(room[0] === 'potion'){
            if(health + Number(room[1]) <= 100){
                console.log(`You healed for ${room[1]} hp.`);
                health += Number(room[1]);
            }
            else{
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);
        }
        else if(room[0] === 'chest'){
            coins += Number(room[1]);
            console.log(`You found ${room[1]} coins.`);
        }
        else{
            health -= Number(room[1]);
            if(health > 0){
                console.log(`You slayed ${room[0]}.`);
            }
            else{
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${i + 1}`);
                win = false;
                break;
            }
        }  
    }
    if(win){
        console.log("You've made it!")
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);