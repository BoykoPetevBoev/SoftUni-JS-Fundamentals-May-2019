function solve(input) {
    let quantity = Number(input.shift());
    let days = Number(input.shift());
    let spirit = 0;
    let budget = 0;
    for(let i = 1; i <= days; i ++) {  
        if(i % 11 == 0){
            quantity += 2;
        }    
        if(i % 2 == 0) {
            budget += 2 * quantity;
            spirit += 5;
        }
        if(i % 3 == 0) {
            budget += (5 * quantity) + (3 * quantity);
            spirit += 13;
        }
        if(i % 5 == 0) {
            budget += 15 * quantity;
            spirit += 17;
            if(i % 3 == 0) {
                spirit += 30;
            }
        }
        if(i % 10 == 0) {
            spirit -= 20;
            budget += 23;
        }
    }
    if(days % 10 == 0){
        spirit -= 30;
    }
    console.log(`Total cost: ${budget}`);
    console.log(`Total spirit: ${spirit}`);
}
solve([1, 7])
solve([3, 20])