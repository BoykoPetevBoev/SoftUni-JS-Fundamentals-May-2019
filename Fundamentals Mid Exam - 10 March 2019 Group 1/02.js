function helloFrance(input) {
    let arr = input.shift().split('|');
    let budget = Number(input);
    let starterBudget = budget;
    let profit = 0;
    let newPrice = [];
    let earnedMoney = 0;
    for (let i of arr) {
        let arrProduct = i.split('->');
        let product = arrProduct[0];
        let price = Number(arrProduct[1]);
        if (product == 'Clothes' && price <= 50) {
            budget = buyItem(budget, price);
        }
        else if (product == 'Shoes' && price <= 35) {
            budget = buyItem(budget, price);
        }
        else if (product == 'Accessories' && price <= 20.50) {
            budget = buyItem(budget, price);
        }
    }
    for (let i of newPrice) {
        earnedMoney += Number(i);
    }
    let totalMoney = budget + earnedMoney;
    budget = (earnedMoney - starterBudget + budget).toFixed(2);
    console.log(newPrice.join(' '));
    console.log('Profit: ' + budget);
    if (totalMoney >= 150) {
        console.log("Hello, France!");
    }
    else {
        console.log("Time to go.");
    }
    function buyItem(budget, price) {
        if (budget >= price) {
            budget -= price;
            newPrice.push((price * 1.4).toFixed(2));
        }
        return budget;
    }
}
helloFrance([ 'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
'120' ])