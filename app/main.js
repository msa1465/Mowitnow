const fs = require('fs');
const mowerTrigger = require('./mowerTrigger');

main();

function main() {
    
    var filePath = process.argv[2];
    if (filePath === undefined)
        return console.log('Please specify the file path.');
    fs.readFile(filePath, encoding = 'utf-8', (err, data) => {
        if (err)
            return console.error('File not found.', err);

        inputFile = data.split(/\r?\n/);
        var mowersEndPositions = mowerTrigger.mowerTrigger(inputFile);
        for (i = 0; i < mowersEndPositions.length; i++)
            console.log(`The Mower n°${i + 1} stopped at the position : <${mowersEndPositions[i].X}, ${mowersEndPositions[i].Y}, ${mowersEndPositions[i].Orientation}>`);
    });
}
