function solve(input) {
    let lines = Number(input.shift());
    let array = input;
    let totoalWeight = 0;
    for (let i = 0; i < lines; i++) {
        let line = array[i].split(';');
        if (line.length == 3) {
            if (checkFormat(line)) {
                let name = animalName(line[0]);
                let kind = animalKind(line[1]);
                let country = animalCountry(line[2]);
                console.log(`${name} is a ${kind} from ${country}`);
                totoalWeight += animalWeight(line[0]);
                totoalWeight += animalWeight(line[1]);
            }
        }
    }
    console.log(`Total weight of animals: ${totoalWeight}KG`);
    function checkFormat(line) {
        let n = false;
        let t = false;
        let c = false;
        if (line[0].startsWith('n:')) {
            n = true;
        }
        if (line[1].startsWith('t:')) {
            t = true;
        }
        if (line[2].startsWith('c--')) {
            c = true;
        }
        if (n && t && c) {
            return true;
        }
        return false;
    }
    function animalName(name) {
        name = name.replace('n:', '');
        let arr = name.split('');
        let nameArr = [];
        for (let j of arr) {
            if (j.match("^[a-zA-Z]+$") || j === ' ') {
                nameArr.push(j);
            }
        }
        return nameArr.join('');
    }
    function animalKind(type) {
        type = type.replace('t:', '');
        let arr = type.split('');
        let typeArr = [];
        for (let j of arr) {
            if (j.match("^[a-zA-Z]+$") || j === ' ') {
                typeArr.push(j);
            }
        }
        return typeArr.join('');
    }
    function animalCountry(countryStr) {
        let country = countryStr.replace('c--', '');
        return country;
    }
    function animalWeight(line) {
        let weight = 0;
        let arr = line.split('')
        for (let j of arr) {
            let code = j.charCodeAt();
            if (48 < code && code < 58) {
                let num = Number(j);
                weight += num;
            }
        }
        return weight;
    }
}

solve(['3',
    'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
    'n:G3e%6org43e;t:C€$at2%;c--Africa',
    'n:AlicE:Won;c-India',
    ]
);