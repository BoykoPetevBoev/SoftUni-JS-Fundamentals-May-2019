function buildWall(input) {
    let sections = input;
    let totalConcrete = 0;
    let workers = 0;
    let output = [];
    for (let i = 0; i < sections.length; i++) {
        workers = 0;
        for (let k = 0; k < sections.length; k++) {
            if (sections[k] < 30) {
                workers++;
                sections[k] += 1;
                totalConcrete += 195;
            }
        }
        if (workers !== 0) {
            workers *= 195;
            output.push(workers);
        }
        for (let j of sections) {
            if (j != 30) {
                i = -1;
                break;
            }
        }
    }
    totalConcrete *= 1900;
    console.log(output.join(', '));
    console.log(`${totalConcrete} pesos`);
}
buildWall([21, 25, 28]);