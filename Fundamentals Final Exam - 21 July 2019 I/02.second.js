function solve(input) {
    let [text, emojiCode] = input;
    let emojisPower = 0;
    let emoji = emojiByCode(emojiCode);
    let validEmojis = findValidEmojis(text);
    if (validEmojis.length > 0) {
        emojisPower = calcPower(validEmojis);
        emojisPower = checkForCorresponds(emoji, validEmojis, emojisPower);
        printEmojis(validEmojis);
    }
    console.log(`Total Emoji Power: ${emojisPower}`);
    function emojiByCode(code) {
        let array = code.split(':');
        let string = '';
        for (let num of array) {
            string += String.fromCharCode(num);
        }
        return `:${string}:`;
    }
    function findValidEmojis(text) {
        let regEx = /:[a-z]{4,}(:[ ,.!? \s])/g;
        let result = text.match(regEx);
        let emojis = [];
        if (result != null) {
            emojis = result.join(' ').match(/:[a-z]{4,}:/g);
        }
        return emojis;
    }
    function calcPower(validEmojis) {
        let power = 0;
        let num = 0;
        for (let word of validEmojis) {
            for (let char of word) {
                if (char != ':') {
                    num = char.charCodeAt();
                    power += num;
                }
            }
        }
        return power;
    }
    function checkForCorresponds(emoji, validEmojis, emojisPower) {
        for (let validEmoji of validEmojis) {
            if(emoji === validEmoji) {
                emojisPower *= 2;
            }
        }
        return emojisPower;
    }
    function printEmojis(validEmoji) {
        console.log(`Emojis found: ${validEmoji.join(', ')}`);
    }
}

solve(['In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:. :boyko:',
    '97:101:117:114']

);
solve(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'])