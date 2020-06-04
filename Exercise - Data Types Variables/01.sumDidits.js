function solve(input)
{
    let num = input.toString();
    let numLength = num.length;
    let result = 0;

    for(let i = 0; i < numLength; i++){
        result += Number(num[i]);
    }
    console.log(result);
}
solve(245678)
solve(97561)
solve(543)