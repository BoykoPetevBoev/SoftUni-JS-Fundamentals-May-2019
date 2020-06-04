function solve(arg1, arg2)
{
    let firstNum = Number(arg1);
    let secondNum = Number(arg2);
    let nums = '';
    let result = 0;
    for(let i = firstNum; i <= secondNum; i++){
        nums += i + ' ';
        result += i; 
    }
    console.log(nums)
    console.log(`Sum: ${result}`)
}
solve(5, 10)