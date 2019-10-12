function solve(input) {
    let array = input;
    for(let i of array) {
        let validMessage = false;
        if(i === 'Last note') {
            break;
        }
        validMessage = isValidMessage(i);
        if(validMessage){
            let [nameCode, code] = i.split('=');
            let name = decipherName(nameCode);
            let geohashcode = checkCode(code);
            if(geohashcode != 'Wrong code!') {
                console.log(`Coordinates found! ${name} -> ${geohashcode}`);
            }
            else {
                print();
            }
        }
        else {
            print();
        }
    }
    function isValidMessage(line) {
        let regEx = /[\w!@#$?]+=[0-9]+<<\w+/g;
        let result = line.match(regEx);
        if(result != null) {
            if(result[0].length === line.length) {
                return true;
            }
        }
        return false;
    }
    function decipherName(nameCode) {
        let regEx = /\w/g
        let name = nameCode.match(regEx).join('');
        return name;
    }
    function checkCode(code) {
        let [codeLength, geohashcode] = code.split('<<');
        codeLength = Number(codeLength);
        if(codeLength === geohashcode.length) {
            return geohashcode;
        }
        else {
            return 'Wrong code!';
        }
    }
    function print(){
        console.log('Nothing found!');
    }
}

solve([ 'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
'=9Cho?@#Oyu<<thvb7ydht',
'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
'Last note' ]);