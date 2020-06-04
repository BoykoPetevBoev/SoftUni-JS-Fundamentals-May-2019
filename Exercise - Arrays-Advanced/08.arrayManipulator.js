function arrayManipulator(arr, cmd) {
    let array = arr;
    let commandArray = cmd;
    for (let i of commandArray) {
        let command = i.split(' ');
        let action = command.shift();
        if (action === 'add' || action === 'addMany') {
            let index = Number(command.shift());
            add(index, command);
        }
        else if (action === 'remove') {
            remove(command);
        }
        else if (action === 'shift') {
            shift(command, array);
        }
        else if (action === 'contains') {
            containsNum(command);
        }
        else if (action === 'sumPairs') {
            sumPairs();
        }
        else if (action === 'print') {
            console.log(array);
            return;
        }
    }
    function add(index, element) {
        if (0 <= index && index <= array.length) {
            let lastElementsArr = array.splice(index);
            for (let j of element) {
                j = Number(j)
                array.push(j);
            }
            for (let i of lastElementsArr) {
                array.push(i);
            }
            return array;
        }
    }
    function remove(index) {
        if (0 <= index && index < array.length) {
            index = Number(index)
            array.splice(index, 1);
            return array;
        }
    }
    function shift(rotation, array) {
        rotation = Number(rotation.shift());
        while (rotation !== 0 && rotation > 0) {
            let firstNum = array.shift();
            array.push(firstNum);
            rotation--;
        }
        return array;
    }
    function containsNum(num) {
        let containsNum = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == num) {
                containsNum = i;
                break;
            }
        }
        console.log(containsNum);
    }
    function sumPairs() {
        let newArr = array.splice(0);
        while (newArr.length != 0) {
            let firstNum = newArr.shift();
            let secondNum = newArr.shift();
            if(secondNum == undefined) {
                secondNum = 0;
            }
            array.push(firstNum + secondNum);
        }
        return array;
    }
    console.log(array);
}
arrayManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"])