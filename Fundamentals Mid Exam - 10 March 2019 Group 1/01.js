function solve(input) {
    let days = Number(input.shift());
    let budget = Number(input.shift());
    let people = Number(input.shift());
    let pricePerKm = Number(input.shift());
    let food = Number(input.shift()) * people * days;
    let night = Number(input.shift()) * people * days;
    let distanceArr = input;
    let expense = 0;
    if (people > 10) {
        night *= 0.75;
    }
    let hotelPrice = food + night;
    expense += hotelPrice;
    let i = 1;
    while (i <= days && expense < budget) {
        expense += Number(distanceArr[i - 1]) * pricePerKm;
        if (i % 3 == 0 && expense < budget) {
            expense *= 1.4;
        }
        if (i % 5 == 0 && expense < budget) {
            expense *= 1.4;
        }
        if (i % 7 == 0 && expense < budget) {
            expense -= (expense / people);
        }
        i++;
    }
    if (budget >= expense) {
        let moneyLeft = budget - expense;
        console.log(`You have reached the destination. You have ${moneyLeft.toFixed(2)}$ budget left.`);
    }
    else {
        let moneyNeeded = expense - budget;
        console.log(`Not enough money to continue the trip. You need ${moneyNeeded.toFixed(2)}$ more.`);
    }
}
solve([10,
    20500,
    11,
    1.2,
    8,
    13,
    100,
    150,
    500,
    400,
    600,
    130,
    300,
    350,
    200,
    300
])

solve([7,
    12000,
    5,
    1.5,
    10,
    20,
    512,
    318,
    202,
    154,
    222,
    108,
    123]
)