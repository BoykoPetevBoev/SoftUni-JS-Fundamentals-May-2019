function solve(arg1, arg2) {
    let base = Number(arg1);
    let increment = Number(arg2);

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let totalStone = 0;
    let totalLapisLazuli = 0;
    let totalMarble = 0;

    let blocks = 0
    let layer = 0;

    for (let i = base; i > 0; i -= 2) {
        layer++;
        blocks = i * i;
        if(i == 1 || i == 2){
            gold = i * i;
        }
        else if (layer % 5 == 0) {
            stone = (i - 2) * (i - 2);
            totalStone += stone;
            lapisLazuli = blocks - stone;
            totalLapisLazuli += lapisLazuli;
        }
        else {
            stone = (i - 2) * (i - 2);
            totalStone += stone;
            marble = blocks - stone;
            totalMarble += marble;
        }
    }
    totalStone *= increment;
    totalMarble *= increment;
    totalLapisLazuli *= increment;
    gold *= increment;
    layer *= increment;
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(layer)}`);
}
solve(11, 1)
solve(11, 0.75)