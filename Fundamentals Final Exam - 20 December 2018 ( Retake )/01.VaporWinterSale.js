function solve(input) {
    let games = input.shift().split(', ');
    let gameList = {};
    let gameDLCList = {}; 
    games.forEach(line => {
        if (line.includes('-')) {
            let [game, price] = line.split('-');
            addGame(game, price);
        }
        else if (line.includes(':')) {
            let [game, dlc] = line.split(':');
            addDLC(game, dlc);
        }
    });
    sortGameDlc();
    sortGames();
    function addGame(game, price) {
        if (!gameList.hasOwnProperty(game)) {
            gameList[game] = Number(price);
        }
    }
    function addDLC(game, dlc) {
        if(gameList.hasOwnProperty(game)) {
            let gameDLC = game + ' - ' + dlc;
            gameDLCList[gameDLC] = gameList[game] * 1.2;
            delete gameList[game];
        }
    }
    function sortGameDlc() {
        let gameArray = Object.entries(gameDLCList);
        gameArray.forEach(arr => {
            arr[1] *= 0.5; 
        });
        gameArray.sort((a, b) => a[1] - b[1]);
        printGames(gameArray);
    }
    function sortGames() {
        let gameArray = Object.entries(gameList);
        gameArray.forEach(arr => {
            arr[1] *= 0.8; 
        });
        gameArray.sort((a, b) => b[1] - a[1]);
        printGames(gameArray);
    }
    function printGames(array) {
        console.table(array)
        array.forEach(game => {
            console.log(`${game[0]} - ${game[1].toFixed(2)}`);
        });
    }
}

solve([ 'Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:Boyko' ]);