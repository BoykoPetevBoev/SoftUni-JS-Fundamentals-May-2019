function solve(input) {
    let array = input;
    let string = '';
    for (let i of array) {
        if(i === 'End') {
            break;
        }
        let [command, value] = i.split(' ');
        if(command === 'Add') {
            string = concateString(string, value);
        }
        else if(command === 'Upgrade') {
            string = upgradeString(value);
        }
        else if(command === 'Print') {
            printResult(string);
        }
        else if(command === 'Index') {
            findIndex(string, value);
        }
        else if(command === 'Remove') {
            string = removeString(string, value);
        }
    }
    function concateString(str, value) {
        let result = str.concat(value);
        return result;
    }
    function upgradeString(char) {
        let result = '';
        let code = char.charCodeAt(0);
        for(let i = 0; i < string.length; i++) {
            if(string[i] === char) {
                let newChar = String.fromCharCode(code + 1);
                result = concateString(result, newChar);
            }
            else {
                result = concateString(result, string[i]);
            }
        }
        return result;
    }
    function printResult(result) {
        console.log(result);
    }  
    function findIndex(str, char) {
        let arr = [];
        let result = '';
        for(let i = 0; i < str.length; i++) {
            if(char === str[i]) {
                arr.push(i);
            }
        }
        if(arr.length === 0) {
            result = 'None';
        }
        else {
            result = arr.join(' ');
        }
        printResult(result);
    }
    function removeString(string, part) {
        let result = string;
        while(result.includes(part)) {
            result = result.replace(part, '');
        }
        return result;
    }
}

solve([ 'Add abracadabra',
'Print',
'Upgrade a',
'Print',
'Index b',
'Remove bbrb',
'Print',
'End' ]);