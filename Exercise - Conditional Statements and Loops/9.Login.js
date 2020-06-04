function solve(input) {
    let username = input.shift();
    let loginPass = username.split('').reverse().join('');
    let pass = input.shift();
    let wrongPass = 0;
    let end = false;
    while (pass) {
        if (pass == loginPass) {
            console.log(`User ${username} logged in.`);
            end = true;
        } else {
            if (wrongPass == 3) {
                console.log(`User ${username} blocked!`);
                end = true;
                break;
            } else {
                wrongPass++
                console.log('Incorrect password. Try again.');
            }
        }
        if (end) {
            break;
        }
        pass = input.shift();
    }
}
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])