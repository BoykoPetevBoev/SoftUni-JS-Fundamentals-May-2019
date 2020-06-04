function solve(input) {
    let animalsFoodLimit = {};
    let areas = {};
    let infoArray = input;
    for (let line of infoArray) {
        if (line === 'Last Info') {
            break;
        }
        let [command, name, food, area] = line.split(':');
        food = Number(food);
        if (command === 'Add') {
            addAnimal(name, food, area);
        }
        else if (command === 'Feed') {
            feedAnimal(name, food, area);
        }
    }
    animalsLeft();
    animalsInAreas();
    function addAnimal(name, food, area) {
        if (!animalsFoodLimit.hasOwnProperty(name)) {
            animalsFoodLimit[name] = 0;
        }
        animalsFoodLimit[name] += food;
        if(!areas.hasOwnProperty(area)){
            areas[area] = [];
        }
        if (!areas[area].includes(name)) {
            areas[area].push(name);
        }
    }
    function feedAnimal(name, food, area) {
        if (animalsFoodLimit.hasOwnProperty(name)) {
            animalsFoodLimit[name] -= food;
            if (animalsFoodLimit[name] <= 0) {
                console.log(`${name} was successfully fed`);
                delete animalsFoodLimit[name];
                let index = areas[area].indexOf(name);
                areas[area].splice(index, 1);
            }
        }
    }
    function animalsLeft() {
        let animalsArray = Object.entries(animalsFoodLimit);
        animalsArray.sort((a, b) => a[0].localeCompare(b[0]));
        animalsArray.sort((a, b) => b[1] - a[1]);
        console.log('Animals:');
        animalsArray.forEach(animal => {
            console.log(`${animal[0]} -> ${animal[1]}g`);
        });
    }
    function animalsInAreas() {
        let areasArr = Object.entries(areas);
        areasArr.sort((a, b) => b[1].length - a[1].length);
        console.log('Areas with hungry animals:');
        areasArr.forEach(area => {
            if (area[1].length > 0) {
                console.log(`${area[0]} : ${area[1].length}`);
            }
        });
    }
}

solve(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info']);