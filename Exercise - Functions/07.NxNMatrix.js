function matrix(input){
    let num = Number(input);
    let line = ''
    for(let j = 1; j <= num; j++){
            line += num + ' ';
        }
    for(let i = 1; i <= num; i++){ 
        console.log(line);
    }
}
matrix(7);