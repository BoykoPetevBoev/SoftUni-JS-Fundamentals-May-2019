function solve(input) {
    let array = input;
    let gladiators = readInput(array);
    let finalArray = sortGladiators(gladiators);
    print(finalArray);
    function readInput(array) {
        let object = {};
        for (let i of array) {
            if (i == 'Ave Cesar') {
                return object;
            }
            let newSkill = i.split(' -> ');
            let fight = i.split(' vs ');
            if (newSkill.length === 3) {
                object = learningSkill(newSkill, object);
            }
            if (fight.length === 2) {
                object = gladiatorFight(fight, object);
            }
        }
    }
    function learningSkill(newSkill, object) {
        let [gladiatorName, skill, value] = newSkill;
        value = Number(value);
        if (!object.hasOwnProperty(gladiatorName)) {
            object[gladiatorName] = {};
            object[gladiatorName]['totalSkill'] = value;
            object[gladiatorName][skill] = value;
        }
        else if (object.hasOwnProperty(gladiatorName)) {
            if (!object[gladiatorName].hasOwnProperty(skill)) {
                object[gladiatorName]['totalSkill'] += value;
                object[gladiatorName][skill] = value;
            }
            else if (object[gladiatorName].hasOwnProperty(skill)) {
                if (object[gladiatorName][skill] < value) {
                    let diff = value - object[gladiatorName][skill];
                    object[gladiatorName]['totalSkill'] += diff;
                    object[gladiatorName][skill] = value;
                }
            }
        }
        return object;
    }
    function gladiatorFight(fight, object) {
        let [firstGladiator, secondGladiator] = fight;
        let firstNameInList = object.hasOwnProperty(firstGladiator);
        let secondNameInList = object.hasOwnProperty(secondGladiator)
        if (firstNameInList && secondNameInList) {
            let firstGladiatorSkills = Object.keys(object[firstGladiator]);
            firstGladiatorSkills.shift();
            let secondGladiatorSkills = Object.keys(object[secondGladiator]);
            secondGladiatorSkills.shift();
            let haveSameSkill = false;
            for (let i of firstGladiatorSkills) {
                for (let j of secondGladiatorSkills) {
                    if (i == j) {
                        haveSameSkill = true;
                        break;
                    }
                }
            }
            if (haveSameSkill) {
                let firstGTotalSkill = object[firstGladiator]['totalSkill'];
                let secondGTotatSkill = object[secondGladiator]['totalSkill'];
                if (firstGTotalSkill > secondGTotatSkill) {
                    delete object[secondGladiator];
                }
                else if (firstGTotalSkill < secondGTotatSkill) {
                    delete object[firstGladiator];
                }
            }
        }
        return object;
    }
    function sortGladiators(object) {
        let array = [];
        for (let key in object) {
            let arr = [];
            let line = Object.entries(object[key]);
            let points = line.shift();
            line.sort((a, b) => b[1] - a[1]);
            arr.push([key, points[1]], line )
            array.push(arr);
        }
        array.sort((a, b) => b[0][1] - a[0][1])
        return array;
    }
    function print(finalArray) {
        for(let i of finalArray) {
            let arr = i;
            let nameScore = i[0];
            let skills = i[1];
            console.log(`${nameScore[0]}: ${nameScore[1]} skill`);
            for(let j of skills) {
                console.log(`- ${j[0]} <!> ${j[1]}`);
            }
        }
    }
}
solve(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
);