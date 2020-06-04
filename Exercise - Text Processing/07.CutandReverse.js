function solve(input) {
    let string = input;
    let half = string.length / 2;
    let firstHalf = string.substring(0, half);
    let secondHalf = string.substring(half);
    let firstHalfRev = reverseString(firstHalf);
    let secondHalfRev = reverseString(secondHalf);
    print(firstHalfRev);
    print(secondHalfRev);
    function reverseString(str) {
        result = str
            .split('')
            .reverse()
            .join('');
        return result;
    }
    function print(text) {
        console.log(text);
    }
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')