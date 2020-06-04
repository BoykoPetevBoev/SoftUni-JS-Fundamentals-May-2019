function solve(input) {
    let array = input.split(' ');
    array = array.map((n) => n.toLowerCase());
    let objectWords = countWords(array);
    let oddWords = findOddWords(objectWords);
    print(oddWords);
    function countWords(array) {
        let obj = {};
        for (let i of array) {
            if (!obj.hasOwnProperty(i)) {
                obj[i] = 1;
            }
            else {
                obj[i]++;
            }
        }
        return obj;
    }
    function findOddWords(objectWords) {
        let obj = {};
        for (let key in objectWords) {
            if (objectWords[key] % 2 !== 0) {
                obj[key] = objectWords[key]
            }
        }
        return obj;
    }
    function print(oddWords){
        let result = Object.keys(oddWords);
        console.log(result.join(' '));
    }
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');