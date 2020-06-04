function solve(arg1, arg2, arg3)
{
    let group = arg1;
    let type = arg2;
    let day = arg3;

    let singlePrice = 0;

    if(type === 'Students'){
        if(day === 'Friday'){
            singlePrice = 8.45;
        }
        else if(day === 'Saturday'){
            singlePrice = 9.80;
        }
        else if(day === 'Sunday'){
            singlePrice = 10.46;
        }
    }
    else if(type === 'Business'){
        if(day === 'Friday'){
            singlePrice = 10.90;
        }
        else if(day === 'Saturday'){
            singlePrice = 15.60;
        }
        else if(day === 'Sunday'){
            singlePrice = 16;
        }
    }
    else if(type === 'Regular'){
        if(day === 'Friday'){
            singlePrice = 15;
        }
        else if(day === 'Saturday'){
            singlePrice = 20;
        }
        else if(day === 'Sunday'){
            singlePrice = 22.50;
        }
    }
    let totalPrice = singlePrice * group;
    if(group >= 30 && type === 'Students'){
        totalPrice *= 0.85;
    }
    if(group >= 100 && type === 'Business'){
        totalPrice = singlePrice * (group - 10);
    }
    if(group >= 10 && group <= 20 && type === 'Regular'){
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
solve(30, 'Students', 'Sunday')