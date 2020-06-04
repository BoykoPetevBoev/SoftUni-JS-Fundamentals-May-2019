function solve(input) {
    let demonsInfo = {};
    let demonsArr = input.shift().split(',');
    demonsArr.forEach(name => {
        name = name.trim();
        demonsInfo[name] = [];
        demonHealts(name);
        demonDamage(name);
    });
    sortAndPrint(demonsInfo)
    function demonHealts(name) {
        let health = 0;
        let characters = name.match(/[^0-9+\-*/\.]/g);
        if (characters) {
            characters.forEach(char => {
                health += char.charCodeAt();
            });
        }
        demonsInfo[name].push(health)
    }
    function demonDamage(name) {
        let damage = 0;
        let numArr = name.match(/-?\d+\.?\d*/g);
        if (numArr) {
            numArr = numArr.map((n) => Number(n));
            numArr.forEach(element => {
                damage += element;
            });
        }
        let specialChar = name.match(/[\*\/]/g);
        if (specialChar) {
            specialChar.forEach(char => {
                if (char === '*') {
                    damage *= 2;
                }
                else if (char === '/') {
                    damage /= 2;
                }
            });
        }
        demonsInfo[name].push(damage);
    }
    function sortAndPrint(demonsInfo) {
        demonsInfo = Object.entries(demonsInfo);
        demonsInfo.sort((a, b) => a[0].localeCompare(b[0]));
        demonsInfo.forEach(demon => {
            console.log(`${demon[0]} - ${demon[1][0]} health, ${demon[1][1].toFixed(2)} damage`);
        })
    }
}

solve(['M3ph1st0**,    Azazel']);
solve(['M3ph-0.5s-0.5t0.0**']);
solve(['Gos/ho'])
