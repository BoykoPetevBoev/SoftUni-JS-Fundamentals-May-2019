function solve(input) {
    let num = String(input).split('');
    let even = 0;
    let odd = 0;
    for(let i of num){
        i = Number(i);
        if(i % 2 === 0){
            even += i;
        }
        else{
            odd += i; 
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

solve(3495892137259234);