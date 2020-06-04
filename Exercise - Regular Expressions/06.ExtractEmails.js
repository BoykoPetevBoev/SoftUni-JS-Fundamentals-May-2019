function solve(input) {
    let text = input.shift();
    let regEx = /[A-Za-z0-9]+[\.,\-_]*[a-zA-Z0-9]+@[a-z]+(\.[a-z]+){1,}/g;
    let emails = text.match(regEx);
    if (emails) {
        emails.forEach(element => {
            console.log(element);
        });
    }
}

solve(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.']);
solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'])
solve([' support@github.com.'])
