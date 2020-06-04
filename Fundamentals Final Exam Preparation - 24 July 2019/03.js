function solve(input) {
    let array = input;
    for (let line of array) {
        let regEx = /([#$%*&])([A-Za-z]+)\1=(\d+)!!(.+)/g;
        let validName = regEx.exec(line);
        if (validName) {
            let name = validName[2];
            let length = Number(validName[3]);
            let code = validName[4];
            let isValid = checkLength(length, code);
            if (isValid) {
                let newCode = decryptCode(length, code);
                return printResult(name, newCode);
            }
        }
        else {
            console.log("Nothing found!");
        }
    }
    function checkLength(length, code) {
        if (length != code.length) {
            console.log("Nothing found!");
            return false;
        }
        return true;
    }
    function decryptCode(length, code) {
        let result = '';
        for (let i of code) {
            let symCode = i.charCodeAt() + length;
            result += String.fromCharCode(symCode);
        }
        return result;
    }
    function printResult(name, code) {
        console.log(`Coordinates found! ${name} -> ${code}`);
    }
}

solve(['%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S']
);

solve(['Ian6Hutchinson=7!!\\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd']
)