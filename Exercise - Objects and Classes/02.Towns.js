function towns(inputArr) {
    let array = inputArr;
    for(let i of array) {
        let townArr = i.split(' | ');
        let townObj = {
            town: townArr[0],
            latitude: Number(townArr[1]).toFixed(2),
            longitude: Number(townArr[2]).toFixed(2)
        };
        console.log(`{ town: '${townObj.town}', latitude: '${townObj.latitude}', longitude: '${townObj.longitude}' }`);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)