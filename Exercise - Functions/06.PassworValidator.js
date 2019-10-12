function passwordValidator(input) {
    let passwordArr = input.split('');
    let passLength = false;
    let lettersAndDigits = false;
    let minDigits = false;
    passwodrLength(input);
    passwordLeterDigit(passwordArr);
    atLeastTwoDigits(passwordArr);
    if (passLength && lettersAndDigits && minDigits) {
        console.log('Password is valid');
    }
    else {
        if(!passLength){
            console.log('Password must be between 6 and 10 characters');
        }
        if(!lettersAndDigits){
            console.log('Password must consist only of letters and digits');
        }
        if(!minDigits){
            console.log('Password must have at least 2 digits');
        }
    }

    function passwodrLength(input) {
        let pass = input.length;
        if (6 <= pass && pass <= 10) {
            passLength = true;
        }
        return passLength;
    }
    function passwordLeterDigit(arr) {
        for (let i of arr) {
            let sym = i.charCodeAt(0);
            if ((47 < sym && sym < 58) || (64 < sym && sym < 91) || (96 < sym && sym < 123)) {
                lettersAndDigits = true;
            }
            else {
                lettersAndDigits = false;
                return lettersAndDigits;
            }
        }
        return lettersAndDigits;
    }
    function atLeastTwoDigits(arr) {
        let digit = 0;
        for (let i of arr) {
            let sym = i.charCodeAt(0);;
            if (47 < sym && sym < 58) {
                digit++
            }
            if (digit >= 2) {
                minDigits = true;
                return minDigits;
            }
        }
    }
}

passwordValidator('Pa112221');