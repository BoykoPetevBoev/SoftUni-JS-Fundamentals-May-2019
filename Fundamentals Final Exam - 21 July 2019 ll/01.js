function solve(input) {
    let text = '';
    let array = input;
    for (let line of array) {
        let [command, value] = line.split(' ');
        if (command == 'End') {
            break;
        }
        else if (command == 'Add') {
            add(value);
        }
        else if (command == 'Upgrade') {
            text = upgrade(value);
        }
        else if (command == 'Print') {
            print(text);
        }
        else if (command == 'Index') {
            index(value);
        }
        else if (command == 'Remove') {
            remove(value)
        }
    }
    function add(string) {
        text += string;
    }
    function upgrade(char) {
        let newChar = String.fromCharCode(char.charCodeAt() + 1);
        let result = '';
        for (let i of text) {
            if (i == char) {
                result += newChar;
            }
            else {
                result += i;
            }
        }
        return result;
    }
    function print(text) {
        console.log(text)
    }
    function index(char) {
        let charIndex = [];
        for (let i = 0; i < text.length; i++) {
            if (text[i] === char) {
                charIndex.push(i);
            }
        }
        if (charIndex.length === 0) {
            console.log('None');
        }
        else {
            console.log(charIndex.join(' '));
        }
    }
    function remove(string) {
        while (text.includes(string)) {
            text = text.replace(string, '');
        }
    }
}
solve([
    'Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End'
]);