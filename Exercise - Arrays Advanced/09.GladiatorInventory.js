function gladiator(input) {
    let inventoryArray = input.shift().split(' ');
    let commandArray = input;
    for (let i of commandArray) {
        let command = i.split(' ');
        let action = command[0];
        let item = command[1];
        let boughtAlready = false;
        for (let i of inventoryArray) {
            if (i === item) {
                boughtAlready = true;
            }
        }
        if (action === 'Buy') {
            if (!boughtAlready) {
                buyItem(item);
            }
        }
        else if (action === 'Trash') {
            if (boughtAlready) {
                trashItem(item);
            }
        }
        else if (action === 'Repair') {
            if (boughtAlready) {
                trashItem(item);
                buyItem(item);
            }
        }
        else if (action === 'Upgrade') {
           
            upgradeItem(item);
        }
    }
    function buyItem(item) {
        inventoryArray.push(item);
        return inventoryArray;
    }
    function trashItem(item) {
        let index = 0;
        for (let i = 0; i < inventoryArray.length; i++) {
            if (item === inventoryArray[i]) {
                index = i;
            }
        }
        inventoryArray.splice(index, 1);
        return inventoryArray;
    }
    function upgradeItem(item) {
         let itemArr = item.split('-');
        for (let i = 0; i < inventoryArray.length; i++) {
            if(itemArr[0] == inventoryArray[i]){
                let newArr = inventoryArray.splice(i + 1);
                inventoryArray.push(itemArr[0] + ':' + itemArr[1]);
                for(let j of newArr){
                    inventoryArray.push(j);
                }
                break;
            }
        }
        return inventoryArray;
    }
    console.log(inventoryArray.join(' '));
}
gladiator(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade SWORD  -V']
)