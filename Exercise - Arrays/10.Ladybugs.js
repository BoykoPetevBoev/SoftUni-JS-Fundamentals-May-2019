function solve(input) {
    let arrSize = input[0];
    let array = [];
    let ladybugsPosition = input[1].split(' ');
    for (let i = 0; i < arrSize; i++) {
        array.push(0);
    }
    for (let j = 0; j < ladybugsPosition.length; j++) {
        if (0 <= ladybugsPosition[j] && ladybugsPosition[j] < array.length && array[ladybugsPosition[j]] == 0) {
            array[ladybugsPosition[j]] = 1;
        }
    }
    for (let cmd = 2; cmd < input.length; cmd++) {
        let changePosition = input[cmd].split(' ');
        let firstPosition = Number(changePosition[0]);
        if (0 <= firstPosition && firstPosition < array.length && array[firstPosition] === 1) {
            let direction = changePosition[1];
            let steps = changePosition[2];
            steps = Number(steps);
            if (direction === 'left' && steps >= 0) {
                steps *= (-1);
            }
            else if(direction === 'left' && steps < 0){
                direction = 'right'
                steps *= -(1);
            }
            else if(direction === 'right' && steps < 0){
                direction = 'left';
            }
            let lastPosition = steps + firstPosition;
            if (0 <= lastPosition && lastPosition < array.length) {
                let done = false;
                while (!done && (0 <= lastPosition && lastPosition < array.length)) {

                    array[firstPosition] = 0;
                    if (array[lastPosition] === 0) {
                        array[lastPosition] = 1;
                        done = true;
                    }
                    else if (array[lastPosition] === 1 && direction === 'right') {
                        lastPosition += steps;
                    }
                    else if (array[lastPosition] === 1 && direction === 'left') {
                        lastPosition += steps;
                    }
                }
            }
            else{
                array[firstPosition] = 0;
            }
        }
    }
    console.log(array.join(' '));
}
solve([20, '0 1 5 3 8 14 20 19',
    '0 right 2', '19 left 1'
    ]
);