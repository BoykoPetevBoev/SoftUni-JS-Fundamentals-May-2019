function solve(input) {
    let array = input;
    let collectedResources = createObject(array);
    printOutput(collectedResources);
    function createObject(array) {
        let object = {};
        for (let i = 0; i < array.length; i += 2) {
            let resource = array[i];
            let value = Number(array[i + 1]);
            if (!object.hasOwnProperty(resource)) {
                object[resource] = value;
            }
            else {
                object[resource] += value;
            }
        }
        return object;
    }
    function printOutput(collectedResources){
        for(let key in collectedResources){
            let resource = key;
            let value = collectedResources[key];
            console.log(`${resource} -> ${value}`);
        }
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );