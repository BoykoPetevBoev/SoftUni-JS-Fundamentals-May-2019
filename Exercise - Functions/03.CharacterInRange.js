function solve(a, b) {
    let first = a.charCodeAt(0);
    let second = b.charCodeAt(0);

    let arr = [];
    for(let i = Math.min(first, second) + 1; i < Math.max(first, second); i++){
        let char = String.fromCharCode(i);
        arr.push(char); 
    }
    console.log(arr.join(' '))
}
solve('C', '#');