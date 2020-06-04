function sorting(input) {
    let array = input;
    let newArray = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let smallestNum = Number.MAX_SAFE_INTEGER;
    let lengthArr = array.length;
    while (newArray.length < lengthArr) {
        biggestNum = Number.MIN_SAFE_INTEGER;
        smallestNum = Number.MAX_SAFE_INTEGER;
        findBiggestNum(array);
        newArray.push(biggestNum);

        findSmallestNum(array);
        newArray.push(smallestNum);
    }
    if(lengthArr % 2 === 1){
        newArray.pop();
    }
    console.log(newArray.join(' '));
    function findSmallestNum(array) {     
        let index = -1;
        for (let i = 0; i < array.length; i++) {
             if(array[i] < smallestNum){
                index  = i;
                smallestNum = array[i];
            }
        }
        array.splice(index, 1);
        return smallestNum;
    }
    function findBiggestNum(array) {
        let index = -1;
        for (let i = 0; i < array.length; i++) {
            if(array[i] > biggestNum){
                index  = i;
                biggestNum = array[i]
            }
        }
        array.splice(index, 1);
        return biggestNum;
    }
}
sorting([1, 21, 3])