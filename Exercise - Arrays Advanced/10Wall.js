function buildWall(input) {
    let Arr = input;
    let newArr = [];
    let output = [];
    let totalConcrete = 0;
    while (Arr.length !== 0) {
        let workers = 0;
        for (let i = 0; i < Arr.length; i++) {
            Arr[i] += 1;
            totalConcrete += 195;
            workers++;
        }
        workers *= 195;
        output.push(workers);
        for (let j = 0; j < Arr.length; j++) {
            if(Arr[j] >= 30){
                let num = Arr.splice(j, 1);
                newArr.push(num);
                j = -1;
            }
        }
    }
    totalConcrete *= 1900;
    console.log(output.join(', '));
    console.log(`${totalConcrete} pesos`);
}
buildWall([39, 22, 17, 19, 17]);