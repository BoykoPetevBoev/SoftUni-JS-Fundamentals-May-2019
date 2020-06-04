function solve(input) {
    let text = input;
    let output = '';
    let firstIndex = 0;
    for (let i = 1; i < text.length; i++) {
        let secondIndex = i;
        if(text[i].toUpperCase() === text[i]) {
            output += text.substring(firstIndex, secondIndex) + ', ';
            firstIndex = secondIndex;
        }
    }
    output += text.substring(firstIndex);
    console.log(output)
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');