function solve(input) {
    let array = input;
    let bandMembers = {};
    let bandTime = {};
    let lastBand = input.pop();
    for (let line of array) {
        if (line === 'start of concert') {
            break;
        }
        let [command, band, otherInfo] = line.split('; ');
        if (command === 'Add') {
            let members = otherInfo.split(', ');
            addBand(band, members);
        }
        else if (command === 'Play') { 
            let time = Number(otherInfo);
            play(band, time);
        }
    }
    printTotalTime(bandTime);
    sortAndPrintBands(bandTime);
    printLastBand(lastBand);
    function addBand(band, members) {
        if (!bandMembers.hasOwnProperty(band)) {
            bandMembers[band] = [];
        }
        members.forEach(name => {
            if (!bandMembers[band].includes(name)) {
                bandMembers[band].push(name);
            }
        });
    }
    function play(band, time) { 
        if(!bandTime.hasOwnProperty(band)) {
            bandTime[band] = 0;
        }
        bandTime[band] += time;
    }
    function printTotalTime(bandTime) {
        let totalTime = 0;
        totalTime = Object.values(bandTime).reduce((a, b) => a + b, 0);
        console.log(`Total time: ${totalTime}`);
    }
    function sortAndPrintBands(bandTime) {
        let tuples = Object.entries(bandTime);
        tuples.sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);
        tuples.forEach(arr => {
            console.log(`${arr[0]} -> ${arr[1]}`);
        });
    }
    function printLastBand(bandName) {
        console.log(bandName);
        bandMembers[bandName].forEach(name => {
            console.log(`=> ${name}`);
        });
    }
}

solve(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']);
// solve([ 'Add; The Beatles; John Lennon, Paul McCartney',
// 'Add; The Beatles; Paul McCartney, George Harrison',
// 'Add; The Beatles; George Harrison, Ringo Starr',
// 'Play; The Beatles; 3698',
// 'Play; The Beatles; 3828',
// 'start of concert',
// 'The Beatles' ])