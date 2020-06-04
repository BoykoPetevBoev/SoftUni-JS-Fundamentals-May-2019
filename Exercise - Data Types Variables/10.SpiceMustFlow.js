function  solve(input)
{
    let startingyield = Number(input);

    let extract = 0;
    let days = 0;
    while(startingyield >= 100){
        days++;
        extract += startingyield;
        if(extract >= 26){
            extract -= 26;
        }
        else{
            extract = 0;
        }
        startingyield -=10;
    }
    if(extract >= 26){
        extract -= 26;
    }
    else{
        extract = 0;
    }
    
    console.log(days);
    console.log(extract);
}
solve(450)