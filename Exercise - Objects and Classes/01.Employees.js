function employees(inputArr) {
    let array = inputArr;
    for (let i in array) {
        let person = {
            name: array[i],
            personalNum: array[i].length
        };
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )