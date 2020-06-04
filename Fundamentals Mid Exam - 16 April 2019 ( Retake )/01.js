function solve(input)
{
    let budget = Number(input.shift());
    let flourPrice = Number(input.shift());
    let eggPrice = flourPrice * 0.75;
    let milkPrice = (flourPrice * 1.25) / 4;
    let cozonacsPrice = flourPrice + eggPrice + milkPrice;
    let totalCozonack = 0;
    let totalEgg = 0;

    while(budget >= cozonacsPrice){
        budget -= cozonacsPrice;
        totalCozonack++;
        if(totalCozonack % 3 === 0){
            totalEgg += 3;
            totalEgg -= totalCozonack - 2;
        }
        else{
            totalEgg += 3;
        }
    }
    console.log(`You made ${totalCozonack} cozonacs! Now you have ${totalEgg} eggs and ${budget.toFixed(2)}BGN left.`)
}
solve([20.50, 1.25])