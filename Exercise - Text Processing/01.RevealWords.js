function solve(firstP, secondP) {
    let sentence = secondP;
    let words = firstP.split(', ');
    words.forEach(element => {
        sentence = sentence.replace(('*'.repeat(element.length)), element);
    });
    console.log(sentence);  
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);