function lastStop(inputArr) {
    let numbers = inputArr.shift().split(' ');
    let commandArr = inputArr;
    for (let i of commandArr) {
        let line = i.split(' ');
        let command = line.shift();
        let nums = line;
        let index = -1;
        if (command == 'Change') {
            index = numbers.indexOf(nums[0]);
            if (index != -1) {
                numbers.splice(index, 1, nums[1]);
            }
        }
        else if (command == 'Hide') {
            index = numbers.indexOf(nums[0]);
            if (index != -1) {
                numbers.splice(index, 1);
            }
        }
        else if (command == 'Switch') {
            index = numbers.indexOf(nums[0]);
            let secondIndex = numbers.indexOf(nums[1]);
            let n = nums[1];
            if (index != -1 && secondIndex != -1) {
                numbers.splice(secondIndex, 1, nums[0]);
                numbers.splice(index, 1, n);
            }
        }
        else if (command == 'Insert') {
            if (0 <= nums[0] && nums[0] < numbers.length) {
                index = Number(nums[0]) + 1
                numbers.splice(index, 0, nums[1]);
            }
        }
        else if (command == 'Reverse') {
            numbers.reverse();
        }
    }
    console.log(numbers.join(' '))
}
lastStop(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse',
    'Change 73 70',
    'Insert 10 85',
    'END'])