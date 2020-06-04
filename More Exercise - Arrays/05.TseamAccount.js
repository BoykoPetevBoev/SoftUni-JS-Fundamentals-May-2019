function solve(input) {
    let accountCmdArray = input;
    let gamesArray = accountCmdArray.shift().split(' ');
    let commandGame = accountCmdArray.shift().split(' ');
    while (commandGame != 'Play!') {
        let indexPosition = -1;
        let alreadyInstalled = false;
        for(let i = 0; i < gamesArray.length; i++){
            if(gamesArray[i] === commandGame[1]){
                alreadyInstalled = true;
                indexPosition = i;
                break;
            }
        }
        if(commandGame[0] == 'Install' && !alreadyInstalled){
            gamesArray.push(commandGame[1]);
        }
        if(commandGame[0] == 'Uninstall' && alreadyInstalled){
            gamesArray.splice(indexPosition, indexPosition);
        }
        if(commandGame[0] == 'Update' && alreadyInstalled){
            gamesArray.push(gamesArray[indexPosition]);
            gamesArray.splice(indexPosition, indexPosition);
        }

        commandGame = accountCmdArray.shift().split(' ');
        
    }
    
    console.log(gamesArray.join(' ')); 
}

solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
);