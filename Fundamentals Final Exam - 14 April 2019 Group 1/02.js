function solve(input) {
    let array = input;
    let objects = {};
    for (let i of array) {
        if (i === 'END') {
            break;
        }
        let [command, store, itemList] = i.split('->');
        if (command === 'Add') {
            objects = addItems(store, itemList);
        }
        else if (command === 'Remove') {
            objects = removeStore(store);
        }
    }
    let storeArr = sort(objects);
    printStores(storeArr);
    function addItems(store, itemList) {
        let items = itemList.split(',');
        if (!objects.hasOwnProperty(store)) {
            objects[store] = [];
            for(let j of items) {
                objects[store].push(j);
            }
        }
        else {
            for(let j of items) {
                objects[store].push(j);
            }
        }
        return objects;
    }
    function removeStore(store) { 
        if(objects.hasOwnProperty(store)) {
            delete objects[store];
        }
        return objects;
    }
    function sort(objects) {
        let tuples = Object.entries(objects);
        tuples.sort((a, b) => b[0].localeCompare(a[0]));
        tuples.sort((a, b) => b[1].length - a[1].length);
        return tuples;
    }
    function printStores(storeArr) {
        console.log('Stores list:')
        for(let store of storeArr) {
            let name = store[0];
            let items = store[1];
            console.log(name);
            for(let item of items) {
                console.log(`<<${item}>>`);
            }
        }
    }
}

solve([ 'Add->PeakSports->Map,Navigation,Compass',
'Add->Paragon->Sunscreen',
'Add->Groceries->Dried-fruit,Nuts',
'Add->Groceries->Nuts',
'Add->Paragon->Tent',
'Remove->Paragon',
'Add->Pharmacy->Pain-killers',
'END' ]

);