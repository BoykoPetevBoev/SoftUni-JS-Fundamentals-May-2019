function solve(input) {
    let array = input;
    let parking = parkingLot(array);
    parking.sort((a, b) => a.localeCompare(b));
    print(parking);
    function parkingLot(array) {
        let arr = [];
        for (let i of array) {
            let [direction, carNumber] = i.split(', ');
            let parkedCar = arr.includes(carNumber)
            if (direction === 'IN' && !parkedCar) {
                arr.push(carNumber);
            }
            else if (direction == 'OUT') {
                if (parkedCar) {
                    arr.splice(arr.indexOf(carNumber), 1);
                }
            }
        }
        return arr;
    }
    function print(parking){
        for (let i of parking){
            console.log(i);
        }
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);