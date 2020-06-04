function sort(input) {
    let array = input;
    array.sort();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].length > array[j].length) {
                let string = array.splice(j, 1);
                let demoArray = array.splice(i);
                array.push(string);
                for(let k of demoArray){
                    array.push(k);
                }
            }
        }
    }
    console.log(array.join('\n'));
}
sort(["aaa", "ccc", "cccc", "aaaa", "bbbb"]);