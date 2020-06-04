function solve(input) {
    let names = input.shift();
    let info = input;
    let classification = {};
    for (let line of info) {
        if (line === 'end of race') {
            break;
        }
        let name = line.match(/[A-Z]|[a-z]+/g);
        name = name.join('');
        let points = line.match(/\d/g);
        let totalPoints = sumPoints(points);
        fillClasation(name, totalPoints);
    }
    let sortedResult = sortClassification(classification);
    printClassification(sortedResult);
    function sumPoints(points) {
        let result = 0;
        points = points.map((n) => Number(n));
        for (let i of points) {
            result += i;
        }
        return result;
    }
    function fillClasation(name, totalPoints) {
        if (names.includes(name)) {
            if (!classification.hasOwnProperty(name)) {
                classification[name] = totalPoints;
                
            }
            else {
                classification[name] += totalPoints;
            }
        }
        return classification;
    }
    function sortClassification(classification) {
        let tuples = Object.entries(classification);
        tuples.sort((a, b) => b[1] - a[1])
        return tuples;
    }
    function printClassification(sortedResult) {
       console.log(`1st place: ${sortedResult[0][0]}`)
       console.log(`2nd place: ${sortedResult[1][0]}`)
       console.log(`3rd place: ${sortedResult[2][0]}`)
    }
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);