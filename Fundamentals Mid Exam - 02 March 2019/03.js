function coockingFactory(input) {
    let array = input;
    let bestBatch = [];
    let bestQuality = Number.MIN_SAFE_INTEGER;
    let bestAverageQ = Number.MIN_SAFE_INTEGER;
    let bestLength = Number.MAX_SAFE_INTEGER;
    for (let i of array) {
        let quality = 0;
        let averageQ = 0;
        if (i === 'Bake It!') {
            break;
        }
        let batch = i.split('#');
        for (let q of batch) {
            quality += Number(q);
        }
        let arrLength = batch.length;
        averageQ = quality / batch.length;
        if (quality > bestQuality) {
            best()
        }
        else if (quality == bestQuality) {
            if (averageQ > bestAverageQ) {
                best()
            }
            else if (averageQ == bestAverageQ) {
                if (arrLength < bestLength) {
                    best()
                }
            }
        }
        function best() {
            bestLength = arrLength;
            bestAverageQ = averageQ;
            bestQuality = quality;
            bestBatch = batch.splice(0);
        }
    }
    console.log('Best Batch quality: ' + bestQuality);
    console.log(bestBatch.join(' '));
}
coockingFactory(['5#4#10#-2',
    '10#5#2#3#2',
    'Bake It!'
])