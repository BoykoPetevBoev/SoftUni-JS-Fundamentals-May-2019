function solve(a, b) {
    let firstNum = Number(a);
    let secondNum = Number(b);
    let firstF = factorial(firstNum);
    let secondF = factorial(secondNum);
    let difference = divideNums(firstF, secondF);
    console.log(difference.toFixed(2));

    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    function divideNums(firstF, secondF) {
        let result = firstF / secondF;
        return result;
    }
}

solve(6, 2);