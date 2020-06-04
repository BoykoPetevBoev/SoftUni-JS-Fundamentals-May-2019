function solve(input) {
    let string = input;
    let firstLetter = string[0];
    let output = '';
    for (let i = 0; i < string.length; i++) {
        if(firstLetter !== string[i]) {
            output += firstLetter;
            firstLetter = string[i];
        }
    }
    output += string[string.length - 1];
    console.log(output);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd')