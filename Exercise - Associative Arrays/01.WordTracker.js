function solve(input) {
    let words = input.shift().split(' ');
    let array = input;
    let wordsObj = {};
    for(let i of words){
        wordsObj[i] = 0;
    }
    for(let key in wordsObj){
        for(let j of array){
            if(key == j){
                wordsObj[key]++;
            }
        }
    }
    let tuple = Object.entries(wordsObj);
    tuple.sort((firstEl, secEl) =>  secEl[1] - firstEl[1]);
    for(let k of tuple){
        console.log(`${k[0]} - ${k[1]}`);
    }
}

solve(
    [
    'sentence this', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );