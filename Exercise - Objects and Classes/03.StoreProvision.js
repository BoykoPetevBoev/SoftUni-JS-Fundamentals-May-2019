function storeProvision(firstArr, secondArr) {
    let currentStock = firstArr;
    let orderedProducts = secondArr;
    stringToNum(currentStock);
    stringToNum(orderedProducts);
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let index = currentStock.indexOf(orderedProducts[i]);
        if (index != -1) {
            currentStock[index + 1] += orderedProducts[i + 1];
        }
        else {
            currentStock.push(orderedProducts[i], orderedProducts[i + 1]);
        }
    }
    for (let j = 0; j < currentStock.length; j += 2) {
        let productObj = {
            product: currentStock[j],
            quantity: currentStock[j + 1]
        };
        console.log(`${productObj.product} -> ${productObj.quantity}`);
    }
    function stringToNum(arr) {
        for (let i = 1; i < arr.length; i += 2) {
            arr[i] = Number(arr[i]);
        }
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])