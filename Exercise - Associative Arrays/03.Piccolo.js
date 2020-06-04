function solve(input) {
    let array = input;
    let parking = [];
    for (let i of array) {
        let line = i.split(', ');
        let direction = line[0];
        let carNumber = line[1];
        if (direction == 'IN') {
            parking.push(carNumber);
        }
        else if (direction == 'OUT') {
            let index = parking.indexOf(carNumber);
            if(index !== -1){
                parking.splice(index, 1);
            }
        }
    }
    // parking = sort(parking)
    parking.sort((a, b) => a.localeCompare(b));
    if(parking.length === 0){
        console.log('Parking Lot is Empty');
    }
    else {
        for(let car of parking){
            console.log(car);
        }
    }
    // function sort(parking) {
    //     let object = {};
    //     let tupleArr = [];
    //     let result = [];
    //     for(let i of parking){
    //         carNumber = i;
    //         num = carNumber.slice(2, 6)
    //         object[carNumber] = num; 
    //     }
    //     tupleArr = Object.entries(object);
    //     tupleArr.sort((a, b) => a[1] - b[1]);
    //     for(let i of tupleArr){
    //         result.push(i[0]);
    //     }
    //     return result;
    // }
}

solve(['IN, CA2844AA',
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