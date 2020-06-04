function solve(input) {
    let firstShopList = input.shift().split(' ');
    let newShopList = firstShopList.slice(0)
    let numCommand = Number(input.shift());
    let command = '';
    while (numCommand > 0) {
        command = input.shift().split(' ');
        let arrLength = newShopList.length;
        if (command[0] === 'Include') {
            shopInclude(command[1]);
        }
        else if (command[0] === 'Visit') {
            if (newShopList.length >= command[2]) {
                shopVisit(command[1], command[2]);
            }
        }
        else if (command[0] === 'Prefer') {
            let firstPosition = (0 <= command[1] && command[1] < arrLength);
            let secondPoition = (0 <= command[2] && command[2] < arrLength);
            if (firstPosition && secondPoition) {
                shopPrefer(command[1], command[2]);
            }
        }
        else if (command[0] === 'Place') {
            if (0 <= command[2] && command[2] < arrLength) {
                shopPlace(command[1], command[2]);
            }
        }
        numCommand--;
    }
    console.log('Shops left:');
    console.log(newShopList.join(' '));

    function shopInclude(shop) {
        newShopList.push(shop);
        return newShopList;
    }
    function shopVisit(position, num) {
        while (num > 0) {
            if (position === 'first') {
                newShopList.shift();
            }
            else if (position === 'last') {
                newShopList.pop();
            }
            num--;
        }
        return newShopList;
    }
    function shopPrefer(firstIndex, secondIndex) {
        let shop = newShopList[firstIndex];
        newShopList[firstIndex] = newShopList[secondIndex];
        newShopList[secondIndex] = shop;
        return newShopList;
    }
    function shopPlace(shop, position) {
        let lastShops = newShopList.splice(Number(position) + 1);
        newShopList.push(shop);
        for (let i of lastShops) {
            newShopList.push(i);
        }
        return newShopList;
    }
}
solve(['Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
    
]);