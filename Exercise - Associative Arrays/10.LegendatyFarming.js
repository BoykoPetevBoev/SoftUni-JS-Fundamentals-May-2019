function solve(input) {
    let array = input.split(' ');
    let [items, junk] = readInput(array);
    printItems(items);
    printJunk(junk);
    function readInput(array) {
        let items = {
            motes: 0,
            shards: 0,
            fragments: 0
        };
        let junk = {};
        for (let i = 0; i < array.length; i += 2) {
            let material = array[i + 1].toLowerCase();
            let quantity = array[i];
            quantity = Number(quantity);
            let item = false;
            if (material == 'motes' || material == 'shards' || material == 'fragments') {
                item = true;
            }
            if (item) {
                let n = items[material];
                items[material] = n + quantity;
            }
            else if (!junk.hasOwnProperty(material)) {
                junk[material] = quantity;
            }
            else {
                let n = junk[material];
                junk[material] = n + quantity;
            }
            if (items[material] >= 250) {
                break;
            }
        }
        return ([items, junk])
    }
    function printItems(items) {
        let keyMaterial = ''
        for (let key in items) {
            if (items[key] >= 250) {
                keyMaterial = key;
            }
        }
        if (keyMaterial === 'shards') {
            console.log(`Shadowmourne obtained!`);
        }
        else if (keyMaterial === 'fragments') {
            console.log(`Valanyr obtained!`);
        }
        else if (keyMaterial === 'motes') {
            console.log(`Dragonwrath obtained!`);
        }
        items[keyMaterial] -= 250;
        let tuple = Object.entries(items);
        tuple.sort();
        tuple.sort((a, b) => b[1] - a[1]);
        for (let i of tuple) {
            console.log(`${i[0]}: ${i[1]}`);
        }
    }
    function printJunk(junk) {
        let tuple = Object.entries(junk);
        tuple.sort();
        for (let i of tuple) {
            console.log(`${i[0]}: ${i[1]}`);
        }
    }
}


solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');