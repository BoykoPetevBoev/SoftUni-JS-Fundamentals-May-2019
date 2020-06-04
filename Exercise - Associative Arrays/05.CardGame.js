function solve(input) {
    let P = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let T = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    let namesAndCards = createObject(input);
    let namesAndScore = score(namesAndCards);
    print(namesAndScore);
    function createObject(input) {
        let object = {};
        for (let i of input) {
            let line = i.split(': ');
            let name = line[0];
            let cards = line[1].split(', ');
            if (!object.hasOwnProperty(name)) {
                object[name] = cards;
            }
            else {
                for (let j of cards) {
                    object[name].push(j);
                }
            }
            object[name] = [...new Set(object[name])];
        }
        return object;
    }
    function score(namesAndCards) {
        let object = {};
        for(let key in namesAndCards){
            let array = namesAndCards[key];
            let score = 0;
            for(let i of array){
                let type = i.charAt(i.length - 1);
                let power = i.substr(0, i.length - 1);
                let card = P[power];
                card *= T[type];
                score += card;
            }
            object[key] = score;
        }
        return object;
    }
    function print(classation){
        for(let key in classation) {
            let name = key;
            let score = classation[key];
            console.log(`${name}: ${score}`);
        }
    }  
}
solve(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD',
    ]
);