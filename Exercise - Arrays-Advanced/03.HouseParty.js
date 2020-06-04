function houseParty(input) {
    let arrGuest = input;
    let guest = arrGuest.shift();
    let name = '';
    let action = '';
    let nameList = [];
    let indeexPosition = 0;
    let list = false;
    while (guest) {
        list = false;
        reconstruct(guest);
        listCheck(name, nameList);
        if (action === 'is going!' && list) {
            console.log(`${name} is already in the list!`);
        }
        else if (action === 'is going!' && !list) { 
            nameList.push(name);
        }
        else if (action === 'is not going!' && list) { 
            nameList.splice(indeexPosition, 1);
        }
        else if (action === 'is not going!' && !list) { 
            console.log(`${name} is not in the list!`);
        }
            guest = arrGuest.shift();
    }
    console.log(nameList.join('\n'))
    function reconstruct(guest) {
        guest = guest.split(' ');
        name = guest.shift();
        action = guest.join(' ');
        return name, action;
    }
    function listCheck(name, nameList) {
        indeexPosition = 0;
        for (let i = 0; i < nameList.length; i++) {
            if (nameList[i] === name) {
                list = true;
                indeexPosition = i;
            }
        }
        return list, indeexPosition;
    }
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)