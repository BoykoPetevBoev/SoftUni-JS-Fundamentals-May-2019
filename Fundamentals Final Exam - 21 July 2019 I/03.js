function solve(input) {
    let array = input;
    let animals = {};
    for (let line of array) {
        if(line === 'Last Info') {
            break;
        }
        let [command, name, food, area] = line.split(':');
        food = Number(food);
        if(command === 'Add') {
            animals = addAnimal(name, food, area);
        }
        else if(command === 'Feed') {
            animals = feedAnimal(name, food);
        }
    }
    let sortedAnimals = sortAnimals(animals);
    print(sortedAnimals);
    printAreas(animals);
    function addAnimal(name, food, area) {
        if(!animals.hasOwnProperty(name)) {
            animals[name] = {};
            animals[name]['food'] = food;
            animals[name]['area'] = area;
        }
        else {
            animals[name]['food'] += food
        }
        return animals;
    }
    function feedAnimal(name, food) {
        if(animals.hasOwnProperty(name)) {
            animals[name]['food'] -= food;
            if(animals[name]['food'] <= 0) {
                console.log(`${name} was successfully fed`);
                delete animals[name];
            }
        }
        return animals;
    }
    function sortAnimals(animals) {
        let animalList = {};
        for (let key in animals) {
            animalList[key] = animals[key]['food'];
        }
        let tuples = Object.entries(animalList);
        tuples.sort((a, b) => a[0].localeCompare(b[0]));
        tuples.sort((a, b) => b[1] - a[1]);
        return tuples;
    }
    function print(sortedAnimals) {
        console.log('Animals:');
        for(let i of sortedAnimals) {
            console.log(`${i[0]} -> ${i[1]}g`);
        }
    }
    function printAreas(animals) {
        let object = {};
        for(let key in animals) {
            let area = animals[key]['area'];
            if(!object.hasOwnProperty(area)) {
                object[area] = 1; 
            }
            else {
                object[area] += 1;
            }
        }
        let tuples = Object.entries(object);
        tuples.sort((a, b) => b[1] - a[1]);
        console.log('Areas with hungry animals:');
        for(let i of tuples) {
            console.log(`${i[0]} : ${i[1]}`);
        }
    }
}

solve([ 'Add:Maya:7600:WaterfallArea',
'Add:Bobbie:6570:DeepWoodsArea',
'Add:Adam:4500:ByTheCreek',
'Add:Jamie:1290:RiverArea',
'Add:Gem:8730:WaterfallArea',
'Add:Maya:1230:WaterfallArea',
'Add:Jamie:560:RiverArea',
'Feed:Bobbie:6300:DeepWoodsArea',
'Feed:Adam:4650:ByTheCreek',
'Feed:Jamie:2000:RiverArea',
'Last Info' ]);