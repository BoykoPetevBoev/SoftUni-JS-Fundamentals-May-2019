function solve(arg1, arg2)
{
    let num = Number(arg1);
    let precision = Number(arg2);

    num = num.toFixed(precision);

    console.log(parseFloat(num));
}
solve(13.3232323232, 3)