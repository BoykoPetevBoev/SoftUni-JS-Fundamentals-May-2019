function solve(input) {
    let giftList = input.shift().split(' ');
    let cmdArr = input;
    let array = [];
    for (let i of cmdArr) {
        let command = '';
        let product = '';
        let index = -1;
        let arr = [];
        if (i == 'No Money') {
            break;
        }
        else {
            arr = i.split(' ');
            command = arr[0];
            product = arr[1];

        }
        if (command == 'OutOfStock') {
            outOfStock(product);
        }
        else if (command == 'Required') {
            index = arr[2];
            required(product, index);
        }
        else if (command == 'JustInCase') { 
            justInCase(product);
        }
    }
    for(let p of giftList){
        if(p != 'None'){
            array.push(p);
        }
    }
    console.log(array.join(' '));

    function outOfStock(product) {
        for (let j in giftList) {
            if (giftList[j] == product) {
                giftList[j] = 'None';
            }
        }
    }
    function required(product, index) { 
        if(0 <= index && index < giftList.length) {
            giftList[index] = product;
        }
    }
    function justInCase(product) { 
        giftList.pop();
        giftList.push(product);
    }
}
solve(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money']
);