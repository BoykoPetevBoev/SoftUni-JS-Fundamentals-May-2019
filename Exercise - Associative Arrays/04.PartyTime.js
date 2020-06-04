function solve(input) {
    let guestsList = guests(input);
    let partyIndex = input.indexOf('PARTY');
    let people = input.splice(partyIndex + 1);
    let missingGuests = missingG(guestsList, people);
    console.log(missingGuests.length);
    let [VIP, regular] = vipGuests(missingGuests);
    print(VIP);
    print(regular);
    function print(guests) {
        for (let i of guests) {
            console.log(i);
        }
    }
    function vipGuests(missingGuests) {
        let vip = [];
        let normal = [];
        for (let i of missingGuests) {
            let firstChar = i[0];
            if(0 <= firstChar && firstChar <= 9){
                vip.push(i);
            }
            else {
                normal.push(i);
            }
        }
        result = [vip, normal];
        return result;
    }
    function missingG(guestsList, people) {
        for (let i of people) {
            let index = guestsList.indexOf(i);
            if (index != -1) {
                guestsList.splice(index, 1);
            }
        }
        return guestsList;
    }
    function guests(input) {
        let arr = input;
        let list = [];
        for (let i of arr) {
            if (i != 'PARTY') {
                list.push(i);
            }
            else {
                return list;
            }
        }
    }
}

solve(
    ['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'zdSGyQCJ',
        'ZjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
    ]
);