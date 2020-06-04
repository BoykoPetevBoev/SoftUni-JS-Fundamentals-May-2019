function solve(input) {
    let array = input;
    let destinationsObject = createObject(array);
    destinationsObject = sortTowns(destinationsObject);
    let result = sortCountries(destinationsObject);
    printResult(result);
    function createObject(array) {
        let object = {};
        for (let i of array) {
            let line = i.split(' > ');
            let country = line[0];
            let city = line[1];
            let price = Number(line[2]);
            if (!object.hasOwnProperty(country)) {
                object[country] = {};
                object[country][city] = price;
            }
            else if (object.hasOwnProperty(country)) {
                if (!object[country].hasOwnProperty(city)) {
                    object[country][city] = price;
                }
                else if (object[country].hasOwnProperty(city)) {
                    if (price < object[country][city]) {
                        object[country][city] = price;
                    }
                }
            }
        }
        return object;
    }
    function sortTowns(destinationsObject) {
        for (let key in destinationsObject) {
            destinationsObject[key] = Object.entries(destinationsObject[key])
            destinationsObject[key].sort((a, b) => a[1] - b[1])
        }
        return destinationsObject;
    }
    function sortCountries(destinationsObject) {
        let arr = Object.entries(destinationsObject);
        arr = arr.sort();
        return arr;
    }
    function printResult(result) {
        for(let i of result) {
            let arr = [];
            let country = i[0] + ' -> ';
            let city = i[1];
            arr.push(country);
            for(let j of city){
                let output = j.join(' -> ') + ' '
                arr.push(output);
            }
            console.log(arr.join(''));
        }
    }
}
solve(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);