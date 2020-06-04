function solve(input) {
    let sentence = input.split(' ');
    sentence.forEach(element => {
        if(element.startsWith('#') && element.length > 1) {
            let letter = element.substr(1)
            if(letter.match("^[a-zA-Z]+$")) {
                console.log(letter)
            } 
        }
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');