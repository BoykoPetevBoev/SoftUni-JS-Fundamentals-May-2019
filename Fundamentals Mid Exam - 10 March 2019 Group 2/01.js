function solve(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    let water = waterPerDay * players * days;
    let food = foodPerDay * players * days;
    let array = input;
    let ready = true;
    for (let i = 0; i < array.length; i++) {
        energy -= array[i];
        if (energy <= 0) {
            ready = false;
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            break;
        }
        if ((i + 1) % 2 == 0) {
            energy *= 1.05;
            water *= 0.7;
        }
        if ((i + 1) % 3 == 0) {
            energy *= 1.10;
            food -= (food / players);
        }
    }
    if (ready) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}
solve([12,
    6,
    4430,
    9.8,
    5.5,
    620.3,
    840.2,
    960.1,
    220,
    340,
    674,
    365,
    345.5,
    212,
    412.12,
    258,
    496
]);