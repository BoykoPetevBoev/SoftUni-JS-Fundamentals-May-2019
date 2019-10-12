function solve(input) {
    let arr = input;
    let normalNum = 0;
    for(let i of arr){
        let reversed = reverse(i);
        normalNum = i;
        if(normalNum == reversed){
            console.log('true');
        }
        else{
            console.log('false')
        }
    }

    function reverse(num){
        let reverseNum = String(num).split('');
        let result = Number(reverseNum.reverse().join(''));
        return result;
    }
}
solve([123,323,421,121]);