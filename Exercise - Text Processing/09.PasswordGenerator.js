function solve(input) {
    let word = input.pop();
    let firstWords = input.join('');
    let counter = 0;
    firstWords = firstWords.toLowerCase();
    word = word.toUpperCase();
    let password = firstWords.split('');   //a, e, i, o, u
    for (let i = 0; i < password.length; i++) {
        let isVowel = checkVowel(password[i]);
        if (isVowel) {
            password[i] = returnLetter();
        }
    }
    password = password.reverse().join('');
    console.log(`Your generated password is ${password}`);
    function checkVowel(letter) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        for (let i of vowels) {
            if (letter === i) {
                return true;
            }
        }
        return false;
    }
    function returnLetter() {
        let letter = word[counter];
        counter++
        if (counter == word.length) {
            counter = 0;
        }
        return letter;
    }
}

solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
    
);