function solve(input) {
    let num = Number(input);

    for (let i = 1; i <= num; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}
solve(6)