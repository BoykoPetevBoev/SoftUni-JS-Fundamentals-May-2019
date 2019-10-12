function cooking(input ){
    let budget = Number(input.shift());
    let students = Number(input.shift());
    let priceFlour = Number(input.shift());
    let priceEgg = Number(input.shift());
    let priceApron = Number(input.shift());
    
    let neededMoney = 0;
    neededMoney += (Math.ceil(1.2 * students) * priceApron );
    neededMoney += (10 * students * priceEgg);
    for(let i = 1; i <= students; i++){
        if(i % 5 != 0){
            neededMoney += priceFlour;
        }
    }
    if(neededMoney <= budget){
        console.log(`Items purchased for ${neededMoney.toFixed(2)}$.`);
    }
    else {
        console.log(`${(neededMoney - budget).toFixed(2)}$ more needed.`);
    }
}
cooking([50,
    2,
    1.0,
    0.10,
    10.0
])