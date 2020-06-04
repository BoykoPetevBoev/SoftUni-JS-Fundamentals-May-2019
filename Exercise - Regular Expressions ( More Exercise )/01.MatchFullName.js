function solve(input) {
    let text = input.shift();
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let result = text.match(regEx);
    console.log(result.join(' '));
}

solve([ 'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov' ]);