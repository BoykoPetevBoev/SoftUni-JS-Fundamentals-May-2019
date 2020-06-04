function solve(input) {
    let companion = Number(input.shift());
    let days = Number(input.shift());
    let coins = 0;

    for (let i = 1; i <= days; i++) {
        if(i % 10 == 0) {
            companion -= 2;
        }
        if(i % 15 == 0) {
            companion += 5;
        }

        coins += 50;
        coins -= (companion * 2);

        if(i % 3 == 0) {
            coins -= (companion * 3);
        }
        if(i % 5 == 0) {
            coins += (companion * 20);
            if(i % 3 == 0) {
                coins -= (companion * 2);
            }
        }
    }
    let companionsCount = Math.floor(coins / companion);
    console.log(`${companion} companions received ${companionsCount} coins each.`);
}

solve(15, 30);