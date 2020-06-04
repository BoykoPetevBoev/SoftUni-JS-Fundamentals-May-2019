function solve(input) {
    let textArr = input;
    let regEx = />>.+<<((\d+.\d*)|(\d*.\d+))!\d+/g;
    let price = 0;
    console.log('Bought furniture:');
    for(let i of textArr) {
        let result = i.match(regEx);
        if(result != null) {
            let arr = result[0].match(/[^'><!]+/g);
            price += Number(arr[1]) * Number(arr[2])
            console.log(arr[0]);
        }
    }
    console.log(`Total money spend: ${price.toFixed(2)}`);
}

solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
);