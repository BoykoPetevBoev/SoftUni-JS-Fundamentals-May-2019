function solve(input) {
    let [message, emojiCode] = input;
    let validEmojis = findValidEmojie(message);
    if(validEmojis === 'No valid emojis') {
        console.log(`Total Emoji Power: 0`);
        return;
    }
    let emojiesPower = calcEmojiePower(validEmojis);
    emojiesPower = checkForCorresponds(emojiCode, validEmojis, emojiesPower);
    printResult(validEmojis, emojiesPower);
    function findValidEmojie(message) {
        let regEx = /[ ]:[a-z]{4,}:[',', '.', '!', '?']/g;
        let valid = message.match(regEx);
        if (valid != null) {
            let result = valid.join(' ').match(/:[a-z]{4,}:/g);
            return result;
        }
        else {
            return 'No valid emojis';
        }
    }
    function calcEmojiePower(validEmojis) {
        let sum = 0;
        for (let i of validEmojis) {
            for (let j of i) {
                if (j != ':') {
                    sum += j.charCodeAt();
                }
            }
        }
        return sum;
    }
    function checkForCorresponds(emojiCode, validEmojis, emojiesPower) {
        let array = emojiCode.split(':');
        let emoji = ':';
        for (let j of array) {
            code = Number(j);
            char = String.fromCharCode(code);
            emoji += char;
        }
        emoji += ':';
        for (let e of validEmojis) {
            if (e === emoji) {
                emojiesPower *= 2;
            }
        }
        return emojiesPower;
    }
    function printResult(validEmojis, emojiesPower) {
        console.log(`Emojis found: ${validEmojis.join(', ')}`);
        console.log(`Total Emoji Power: ${emojiesPower}`);
    }
}
solve(['In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
    '97:101:117:114']

);
solve(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'])