function seizeTheFire(input) {
    let fireArray = input.shift().split('#');
    let water = Number(input.shift());
    let effort = 0;
    let array = [];
    for (let i of fireArray) {
        let line = i.split(' = ');
        let fire = line[0];
        let sells = Number(line[1]);
        if (water - sells >= 0) {
            if (fire == 'Low' && (0 < sells && sells <= 50)) {
                water -= sells;
                effort += sells;
                array.push(sells);
            }
            else if (fire == 'Medium' && (50 < sells && sells <= 80)) {
                water -= sells;
                effort += sells;
                array.push(sells);
            }
            else if (fire == 'High' && (80 < sells && sells <= 125)) {
                water -= sells;
                effort += sells;
                array.push(sells);
            }
        }
    }
    console.log('Cells:');
    for (let j of array) {
        console.log(' - ' + j);
    }
    console.log(`Effort: ${(effort * 0.25).toFixed(2)}`);
    console.log(`Total Fire: ${effort}`);
}
seizeTheFire(['Medium = 80',
    '80', '']);