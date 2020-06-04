function solve(input) {
    let keysOfGame = input.shift().split('&');
    let result = [];
    keysOfGame.forEach(string => {
        let regEx1 = /[0-9A-Za-z]{16}/gi;
        let regEx2 = /[0-9A-Za-z]{25}/gi
        if (regEx1.test(string) || regEx2.test(string)) {
            string = toUpperCaseString(string);
            string = splitString(string);
            string = replaceDigit(string);
            result.push(string);
        }
    });
    printResult(result);
    function toUpperCaseString(string) {
        let result = string.toUpperCase();
        return result;
    }
    function splitString(string) {
        let length = string.length;
        let arr = [];
        if (length === 16) {
            let regExp = /[0-9A-Za-z]{4}/g;
            arr = string.match(regExp);
        }
        else if (length === 25) {
            let regExp = /[0-9A-Za-z]{5}/g;
            arr = string.match(regExp);
        }
        return arr.join('-');
    }
    function replaceDigit(string) {
        let array = string.split('');
        for (let char = 0; char < array.length; char++) {
            if (0 <= array[char] && array[char] < 10) {
                let result = 9 - Number(array[char]);
                array[char] = result;
            }
        }
        return array.join('');
    }
    function printResult(result) {
        console.log(result.join(', '));
    }
}

solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);