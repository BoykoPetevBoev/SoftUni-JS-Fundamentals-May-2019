function solve(input) {
    let array = input;
    let newArr = [];
    for(let i of array){
        let line = JSON.parse(i);
        newArr.push(line);
        console.log(Object.keys(line))
    }
    newArr.sort((a ,b) => {Object.keys(a) - Object.keys(b)});
    console.log(newArr);
}
// solve([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]);
solve([
    '{"e" : 1}',
    '{"b" : 2}',
    '{"c" : 3}',
    '{"d" : 4}',
    '{"a" : 5}'
])