function solve(num)
{
    let age = Number(num);

    if(0 <= age, age <= 2){
        console.log('baby');
    }
    else if(age <= 13){
        console.log('child');
    }
    else if(age <= 19){
       console.log('teenager');
    }
    else if(age <= 65){
        console.log('adult');
    }
    else if(age > 65){
        console.log('elder');
    }
}
solve([12])