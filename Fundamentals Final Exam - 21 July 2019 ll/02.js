function solve(input) {
    let text = input.shift();
    let emojiCode = input.shift().split(':');
    let emoji = decryptEmojiCode(emojiCode);
    sumEmojiPower(text, emoji);

    function decryptEmojiCode(emojiCode) {
        let result = ':';
        emojiCode.forEach(element => {
            result += String.fromCharCode(Number(element));
        });
        result += ':';
        return result;
    }
    function sumEmojiPower(text, emoji) {
        let regEx = /(?<= ):[a-z]{4,}:[ ,.!?]/g;
        let validEmojis = text.match(regEx);
        let emojiPower = 0;
        if (validEmojis) {
            validEmojis = validEmojis.map((n) => n.match(/:[a-z]{4,}:/g).shift());
            validEmojis.forEach(e => {
                for (let char of e) {
                    if (char != ':') {
                        emojiPower += char.charCodeAt();
                    }
                }
            });
            if (validEmojis.includes(emoji)) {
                emojiPower *= 2;
            }
        }
        printResult(emojiPower, validEmojis);
    }
    function printResult(emojiPower, validEmojis) {
        if(validEmojis) {
            console.log(`Emojis found: ${validEmojis.join(', ')}`);
        }
        console.log(`Total Emoji Power: ${emojiPower}`);
    }
}

solve([
    'Hello I am Mark from :england: :england: and I am :one: :seven: years old, I have a :hamster:, as pet.',
    '115:101:118:101:110'
]);

solve([
    'In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
    '97:101:117:114'

]);