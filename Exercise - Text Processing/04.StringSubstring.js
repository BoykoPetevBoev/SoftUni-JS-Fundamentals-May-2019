function solve(firstStr, secondStr) {
    let word = firstStr.toLowerCase();
    let text = secondStr.toLowerCase().split(' ');
    let found = false;
    for (let element of text) {
        if (element === word) {
            found = true;
            console.log(element);
        }
    }
    if(!found) {
        console.log(`${word} not found!`)
    }
}

solve('javascript',
    'JavaScript is the best programming language'
);
solve('python',
'JavaScript is the best programming language'
)