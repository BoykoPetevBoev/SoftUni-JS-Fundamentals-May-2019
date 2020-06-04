function solve(num1, operatorStr, num2)
{
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let operator = operatorStr;
    let result = 0;

    if(operator == '+'){
        result = firstNum + secondNum;
    }
    else if(operator == '-'){
        result = firstNum - secondNum;
    }
    else if(operator == '/'){
        result = firstNum / secondNum;
    }
    else if(operator == '*'){
        result = firstNum * secondNum;
    }
    console.log(result.toFixed(2));
}
solve(5, '+', 10)