function solve(input) {
    let kids = input.shift().split('&');
    let array = input;
    for (let i of array) {
        if (i === 'Finished!') {
            break;
        }
        let line = i.split(' ');
        if (line[0] == 'Bad') {
            let alreadyExist = kids.includes(line[1]);
            if (!alreadyExist) {
                kids.unshift(line[1]);
            }
        }
        else if (line[0] == 'Good') { 
            let index = kids.indexOf(line[1]);
            if(index != -1){
                kids.splice(index, 1);
            }
        }
        else if (line[0] == 'Rename') { 
            let index = kids.indexOf(line[1]);
            if(index != -1){
                kids.splice(index, 1, line[2]);
            }
        }
        else if (line[0] == 'Rearrange') { 
            let index = kids.indexOf(line[1]);
            if(index != -1){
                kids.push(line[1]);
                kids.splice(index, 1);
            }
        }
    }
    console.log(kids.join(', '));
}
solve([ 'Joshua&Aaron&Walt&Dustin&William',
'Good Walt',
'Bad Jon ',
'Rename Aaron Paul',
'Rearrange Jon',
'Rename Peter George',
'Finished!' ])