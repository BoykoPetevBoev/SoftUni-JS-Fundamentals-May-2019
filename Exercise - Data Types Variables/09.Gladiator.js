function solve(arg1, arg2, arg3, arg4, arg5) {
    let lostFights = Number(arg1);
    let helmetprice = Number(arg2);
    let swordPrice = Number(arg3);
    let shieldPrice = Number(arg4);
    let armorPrice = Number(arg5);

    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;
    for (let i = 1; i <= lostFights; i++) {
        let helmet = false;
        let sword = false;
        if (i % 2 == 0) {
            helmet = true;
            brokenHelmet++;
        }
        if (i % 3 == 0) {
            sword = true;
            brokenSword++;
        }
        if (sword && helmet) {
            brokenShield++;
            if (brokenShield % 2 == 0) {
                brokenArmor++;
            }
        }
    }
    let result = (helmetprice * brokenHelmet) + (swordPrice * brokenSword) +
        (shieldPrice * brokenShield) + (armorPrice * brokenArmor);
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
solve(23, 12.5, 21.5, 40, 200)