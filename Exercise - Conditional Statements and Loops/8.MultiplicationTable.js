function solve(input)
{
    let num = Number(input);
    for(let i = 1; i <= 10; i++){
        let result = 0;
        result = num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}
solve(5)