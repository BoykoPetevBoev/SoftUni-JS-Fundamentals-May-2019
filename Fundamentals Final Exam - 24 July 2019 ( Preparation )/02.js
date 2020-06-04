function solve(input) {
    let array = input;
    for (let line of array) {
        if(line === 'end'){
            break;
        }
        let regEx = /[A-Z][a-z]+([' ]?[a-z]+){0,}:[A-Z]+([ ]?[A-Z]+){1,}/g;
        let regExResult = line.match(regEx);
        if(regExResult && regExResult[0].length == line.length) {
            encryptInfo(line);
        }
        else {
            console.log('Invalid input!');
        }
    }
    function encryptInfo(line) {
        let regEx = /([A-Z][a-z]+([' ]?[a-z]+){0,}):/g;
        let result = regEx.exec(line);
        let nameLength = result[1].length;
        let encryptName = '';
        for(let i of line) {
            if(i != ' ' && i != "'"  && i != ':') {
                let char = i.charCodeAt() + nameLength;
                if(i.toLowerCase() === i && char > 122) {
                  char = (char % 122) + 96;
                }
                else if(i.toUpperCase() === i && char > 90) {
                    char = (char % 90) + 64;
                }
                encryptName += String.fromCharCode(char);
            }
            else if(i === ':') {
                encryptName += '@';
            }
            else {
                encryptName += i;
            }
        }
        console.log(`Successful encryption: ${encryptName}`);
    }
}

solve([ 'Michael k\'ac k son:ANOTHERPARTFME',
]);

