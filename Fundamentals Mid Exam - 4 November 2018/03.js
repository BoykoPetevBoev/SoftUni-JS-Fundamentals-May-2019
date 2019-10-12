function quest(input){
    let journal = input.shift().split(', ');
    let array = input;
    let line = array.shift();
    while(line != 'Retire!'){
        line = line.split(' - ');
        if(line[0] === 'Start'){
            start(line[1]);
        }
        else if(line[0] === 'Complete'){
            complete(line[1]);
        }
        else if(line[0] === 'Side Quest'){
            let quests = line[1].split(':')
            sideQuest(quests[0], quests[1]);
        }
        else if(line[0] === 'Renew'){
            renew(line[1]);
        }
        line = array.shift();
    }
    console.log(journal.join(', '))
    function start(quest){
        let include = journal.includes(quest);
        if(!include){
            journal.push(quest);
        }
    }
    function complete(quest){
        let index = journal.indexOf(quest);
        if(index != -1){
            journal.splice(index, 1);
        }
    }
    function sideQuest(quest1, quest2){
        let index = journal.indexOf(quest1);
        let include = journal.includes(quest2);
        if(index != -1 && !include){
            journal.splice(index + 1 , 0, quest2);
        }
    }
    function renew(quest){
        let index = journal.indexOf(quest);
        if(index != - 1){
            journal.splice(index, 1);
            journal.push(quest);
        }
    }
}
quest([ 'Hello World, If else',
'Complete - Homework',
'Side Quest - If else:Switch',
'Renew - Hello World',
'Retire!' ])