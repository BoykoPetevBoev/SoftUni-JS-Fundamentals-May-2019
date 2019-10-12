function solve(input) {
    let num = Number(input);
    let arrDivisor = [];
    let divisorSum = 0;
    let weHavePerfectNum = false;
    divisors(num);
    divisorsSum(arrDivisor);
    perfectOrNot(num, divisorSum);
    if (num <= 0 || num % 1 !== 0 || !weHavePerfectNum) {
        console.log("It's not so perfect.");
    }
    else{
        console.log('We have a perfect number!');
    }  
    function divisors(num) {
        for (i = 1; i < num; i++) {
            if (num % i === 0) {
                arrDivisor.push(i);
            }
        }
        return arrDivisor;
    }
    function divisorsSum(arrDivisor) {
        for (let j of arrDivisor) {
            divisorSum += j;
        }
        return divisorSum;
    }
    function perfectOrNot(num, divisorSum) {
        if (num === divisorSum) {
            weHavePerfectNum = true;
        }
        return weHavePerfectNum;
    }
}
solve(6);