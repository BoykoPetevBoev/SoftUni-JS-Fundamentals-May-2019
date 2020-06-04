function solve(input)
{
    let character = input;
    let upperChar = character.toUpperCase();
    let lowerChar = character.toLowerCase();
    if(character === upperChar){ 
        console.log('upper-case');
    }
    else if(character === lowerChar){
       console.log('lower-case');
    }
}
solve('b')