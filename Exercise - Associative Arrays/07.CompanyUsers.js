function solve(input) {
    let array = input;
    let companies = createObject(array);
    companies = sortCompanies(companies);
    printOutput(companies)
    function createObject(array) {
        let object = {}
        for (let i of array) {
            let [companyName, ID] = i.split(' -> ');
            if (!object.hasOwnProperty(companyName)) {
                object[companyName] = [ID];
            }
            else {
                if (!object[companyName].includes(ID)) {
                    object[companyName].push(ID);
                }
            }
        }
        return object;
    }
    function sortCompanies(companies) {
        let array = Object.entries(companies);
        array.sort();
        return array;
    }
    function printOutput(companies) {
        for (let i of companies) {
            let companyName = i[0]
            let arrID = i[1];
            console.log(companyName);
            for(let id of arrID) {
                console.log(`-- ${id}`);
            }
        }
    }
}
solve(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ]
        
);