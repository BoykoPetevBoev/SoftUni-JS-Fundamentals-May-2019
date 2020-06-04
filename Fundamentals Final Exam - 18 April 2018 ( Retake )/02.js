function solve(input) {
    let array = input;
    let animals = {};
    for (let i of array) {
        if (i === 'Last Info') { }
        let [command, animalName, food, area] = i.split(':');
        food = Number(food);
        if (command === 'Add') {
            addAnimals([animals, animalName, food, area]);
        }
        else if (command === 'Feed') {
            feedAnimal([animals, animalName, food, area]);
        }
    }
    animalsLeft(animals);
    animalsInArea(animals);
    function addAnimals([animals, animalName, food, area]) {
        if (!animals.hasOwnProperty(animalName)) {
            animals[animalName] = []
            animals[animalName].push(food);
            animals[animalName].push(area);
        }
        else {
            animals[animalName][0] += food;
        }
        return animals;
    }
    function feedAnimal([animals, animalName, food]) {
        if (animals.hasOwnProperty(animalName)) {
            animals[animalName][0] -= food;
            if (animals[animalName][0] <= 0) {
                console.log(`${animalName} was successfully fed`);
                delete animals[animalName];
            }
        }
        return animals;
    }
    function animalsLeft(animals) {
        let tuples = Object.entries(animals);
        tuples.sort((a, b) => b[1][0] - a[1][0]);
        console.log('Animals:')
        tuples.forEach(element => {
            let name = element[0];
            let food = element[1][0];
            console.log(`${name} -> ${food}g`);
        });
    }
    function animalsInArea(animals) {
        let arr = Object.values(animals);
        let areas = {};
        for (let i of arr) {
            let area = i[1]
            if (areas.hasOwnProperty(area)) {
                areas[area] += 1;
            }
            else {
                areas[area] = 1
            }
        }
        let tuples = Object.entries(areas);
        tuples.sort((a, b) => b[1] - a[1]);
        console.log('Areas with hungry animals:')
        for(let j of tuples) {
            let area = j[0];
            let animalsInArea = j[1];
            console.log(`${area} : ${animalsInArea}`);
        }
    }
}

solve([ 'Add:Bonie:3490:RiverArea',
'Add:Sam:5430:DeepWoodsArea',
'Add:Bonie:200:RiverArea',
'Add:Maya:4560:ByTheCreek',
'Feed:Maya:2390:ByTheCreek',
'Feed:Bonie:3500:RiverArea',
'Feed:Johny:3400:WaterFall',
'Feed:Sam:5500:DeepWoodsArea',
'Last Info' ]
);