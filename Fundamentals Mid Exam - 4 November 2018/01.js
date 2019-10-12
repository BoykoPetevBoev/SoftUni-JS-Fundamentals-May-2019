function partyProfit(input) {
    let partySize = Number(input.shift());
    let days = Number(input.shift());
    let coins = 0;

    for (let i = 1; i <= days; i++) {
        if(i % 10 === 0) {
            partySize -= 2;
        }
        if(i % 15 === 0){
            partySize += 5;
        }
        coins += 50;
        coins -= (2 * partySize);
        if (i % 3 === 0) {
            coins -= (partySize * 3);
        }
        if(i % 5 === 0) {
            coins += (partySize * 20);
            if (i % 3 === 0) {
                coins -= (partySize * 2);
            }
        }
    }
    let coinsPerPerson = Math.floor(coins / partySize);
    console.log(`${partySize} companions received ${coinsPerPerson} coins each.`);
}
partyProfit([3, 5]);
partyProfit([15, 30]);