function solve(input) {
    let messageNum = input.shift();
    let secretMessages = input;
    let information = {
        A: [],
        D: []
    }
    secretMessages.forEach(message => {
        let decryptedMessage = decryptMessage(message);
        checkMessage(decryptedMessage);
    })
    print(information)
    function decryptMessage(message) {
        let regEx = /[star]/gi;
        let specialChar = message.match(regEx);
        let count = 0
        if (specialChar) {
            count = specialChar.length;
        }
        let decryptedMessage = '';
        for (let i of message) {
            let code = i.charCodeAt() - count;
            decryptedMessage += String.fromCharCode(code);
        }
        return decryptedMessage;
    }
    function checkMessage(message) {
        let regEx = /@([A-za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/g;
        let messageInfo = regEx.exec(message);
        if (messageInfo) {
            information[messageInfo[3]].push(messageInfo[1]);
        }
    }
    function print(object) {
        let attacked = object['A'];
        let destroyed = object['D'];
        console.log(`Attacked planets: ${attacked.length}`);
        sortAndPrint(attacked);
        console.log(`Destroyed planets: ${destroyed.length}`);
        sortAndPrint(destroyed);
        function sortAndPrint(arr) {
            arr.sort((a, b) => a.localeCompare(b));
            arr.forEach(planetName => {
                console.log(`-> ${planetName}`);
            });
        }
    }
}

// solve(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']);

solve(['1', 'PQ@Zldeg1:30000!D!->20000'])