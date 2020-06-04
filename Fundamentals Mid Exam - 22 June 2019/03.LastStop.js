function lastStop(input) {
    let numbers = input.shift().split(' ');
    let CommandArr = input;
    for (let i of CommandArr) {
        let includeNum = false;
        let index = -1;
        if (i == 'END') {
            break;
        }
        let arr = i.split(' ');
        if (arr[0] == 'Reverse') {
            reverse();
        }
        else if (arr[0] == 'Hide') {
            hide(arr[1]);
        }
        else if (arr[0] == 'Insert') {
            insert(arr[1], arr[2]);
        }
        else if (arr[0] == 'Switch') {
            switchNum(arr[1], arr[2]);
        }
        else if (arr[0] == 'Change') {
            change(arr[1], arr[2]);
        }
    }
    function change(firstNum, secondNum) {
        if (numbers.includes(firstNum)) {
            let index = numbers.indexOf(firstNum);
            numbers[index] = secondNum;
        }
    }
    function hide(num) {
        if (numbers.includes(num)) {
            let index = numbers.indexOf(num);
            numbers.splice(index, 1);
        }
    }
    function switchNum(firstNum, secondNum) {
        let includeFirst = numbers.includes(firstNum);
        let includeSecond = numbers.includes(secondNum);
        if (includeFirst && includeSecond) {
            let firstIndex = numbers.indexOf(firstNum);
            let secondIndex = numbers.indexOf(secondNum);
            numbers.splice(firstIndex, 1, secondNum);
            numbers.splice(secondIndex, 1, firstNum);
        }
    }
    function insert(index, num) {
        if (0 <= index && index < numbers.length) {
            numbers.splice(Number(index) + 1, 0, num);
        }
    }
    function reverse() {
        numbers.reverse();
    }
    console.log(numbers.join(' '));
}
lastStop([ '115 115 101 114 73 111 116 75',
'Insert 5 114',
'Switch 116 73',
'Hide 75',
'Reverse ',
'Change 73 70',
'Insert 10 85',
'END' ]
);