function solve(input) {
    let array = input;
    let garageObj = readInput(array);
    let garageArr = sortGarage(garageObj);
    for (let i of garageArr) {
        let garageNum = i[0];
        let carInfo = i[1];
        printResult(garageNum, carInfo);
    }
    function readInput(array) {
        let object = {};
        for (let i of array) {
            let [garageNum, infoArr] = i.split(' - ');
            if (!object.hasOwnProperty(garageNum)) {
                object[garageNum] = [];
                object[garageNum].push(infoArr);
            }
            else {
                let arr = object[garageNum];
                arr.push(infoArr);
                object[garageNum] = arr;
            }
        }
        return object;
    }
    function sortGarage(garage) {
        let tuple = Object.entries(garage);
        tuple.sort((a, b) => a[0] - b[0]);
        return tuple;
    }
    function printResult(garageNum, carInfo) {
        console.log(`Garage № ${garageNum}`);
        for (let j of carInfo) {
            let line = j.split(': ').join(' - ');
            console.log(`--- ${line}`);
        }
    }
}
solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);