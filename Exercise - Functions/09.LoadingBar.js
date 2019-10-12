function solve(input) {
    let num = Number(input);
    let arr = [];
    if (num === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }
    for (let i = 10; i <= 100; i += 10) {
        if (i <= num) {
            arr.push('%');
        }
        else {
            arr.push('.');
        }
    }
    console.log(`${num}% [${arr.join('')}]`);
    console.log('Still loading...');
}

solve(30);