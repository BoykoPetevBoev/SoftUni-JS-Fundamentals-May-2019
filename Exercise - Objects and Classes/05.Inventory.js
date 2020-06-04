function inventory(input) {
    let array = input;
    let heroes = [];
    for (let i of array) {
        arr = i.split(' / ');
        let obj = {
            Hero: arr[0],
            level: Number(arr[1]),
            items: arr[2].split(', ')
        }
        obj.items.sort((a, b) => a.localeCompare(b));
        obj.items = obj.items.join(', ');
        heroes.push(obj);
    }
    heroes.sort((a, b) => a.level - b.level);
    for(let j of heroes){
        console.log(`Hero: ${j.Hero}`);
        console.log(`level => ${j.level}`);
        console.log(`items => ${j.items}`);
    }
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])