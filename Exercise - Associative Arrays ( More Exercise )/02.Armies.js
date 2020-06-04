function solve(input) {
    let array = input;
    let leaders = readInput(array);
    let sortedLeaders = sort(leaders);
    print(sortedLeaders);
    function readInput(array) {
        let object = {};
        for (let i of array) {
            let cmd = i.split(' ');
            if (cmd == 'arrives') {
                object[name] = {};
                object[name]['army'] = 0;
                continue;
            }
            else if (cmd === 'defeated') {
                let name = line.join(' ');
                if (object.hasOwnProperty(name)) {
                    delete object[name];
                }
                continue;
            }
            line = i.split(' ');
            if (line[1] === '+') {
                let armyName = line[0];
                let armyCount = Number(line[2]);
                for (let key in object) {
                    if (object[key].hasOwnProperty(armyName)) {
                        let totalArmy = object[key][armyName] + armyCount;
                        object[key][armyName] = totalArmy;
                        object[key]['army'] = Number(object[key]['army']) + armyCount;
                    }
                }
                continue;
            }
            else {
                line = i.split(': ');
                let leader = line.shift();
                let [armyName, armyCount] = line.shift().split(', ');
                if (object.hasOwnProperty(leader)) {
                    object[leader][armyName] = Number(armyCount);
                    object[leader]['army'] = Number(object[leader]['army']) + armyCount;
                }
            }
        }
        return object;
    }
    function sort(leaders) {
        for (let key in leaders) {
            let army = Object.values(leaders[key]);
            let totalArmy = army.reduce((a, b) => a + b)
            leaders[key] = Object.entries(leaders[key]);
            leaders[key].sort((a, b) => b[1] - a[1]);
            leaders[key].unshift(totalArmy);
        }
        let tuples = Object.entries(leaders);
        tuples.sort((a, b) => b[1][0] - a[1][0]);
        return tuples;
    }
    function print(sortedLeaders) {
        for (let i of sortedLeaders) {
            let line = i;
            let name = line.shift();
            line = line.shift();
            let totalArmy = line.shift();
            console.log(`${name}: ${totalArmy}`)
            for (let j of line) {
                console.log(`>>> ${j[0]} - ${j[1]}`)
            }
        }
    }
}

solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);