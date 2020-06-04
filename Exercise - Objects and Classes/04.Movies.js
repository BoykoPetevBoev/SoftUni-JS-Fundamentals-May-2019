function movies(input) {
    let arr = [];
    for (let i of input) {
        let movie = '';
        let command = '';
        let date = '';
        let director = '';
        let line = i.split(' ');
        if (line[0] == 'addMovie') {
            line.shift();
            movie = line.join(' ');
            let obj = {
                name: movie
            };
            arr.push(obj);
        }
        else if (line.includes('directedBy')) {
            command = 'directedBy';
            movie = (line.splice(0, line.indexOf('directedBy'))).join(' ');
            line.shift();
            director = line.join(' ');
            for(let i of arr){
                if(i.name === movie){
                    i.director = director;
                }     
            }
        }
        else if (line.includes('onDate')) {
            command = 'onDate';
            movie = (line.splice(0, line.indexOf('onDate'))).join(' ');
            line.shift();
            date = line.join(' ');
            for(let i of arr){
                if(i.name === movie){
                    i.date = date;
                }
            }
        }
    }
    for(let j of arr){
        let keys = Object.keys(j)
        if(keys.length === 3){
            console.log(JSON.stringify(j));
        }
    }  
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
    'addMovie Boyko'
])