function solve(input) {
    let text = input.shift();
    let words = input.shift();
    let hole = "_";
    while (text.includes("_")) {
        let startIndex = text.indexOf("_");
        let endIndex = startIndex;
        while (text[endIndex] == "_") {
            endIndex++;
        }
        let elements = endIndex - startIndex;
        for (let i of words) {
            if (i.length === elements) {
                text = text.replace("_".repeat(elements), i);
            }
        }
    }
    console.log(text);
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);