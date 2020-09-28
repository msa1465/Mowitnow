const Mower = require('./Mower');
const Perimeter = require('./Perimeter');
const Position = require('./Position');
const utilities = require('./utilities');

var mowers = [];
var mowersEndPositions = [];
var mowerIndex = 0;

/**
 * launch the mowers one by one 
 * @param {Array} inputFile the input file
 */
function mowerTrigger(inputFile) {

    perimeter = new Perimeter(utilities.intParser(inputFile[0].split(' ')[0]), utilities.intParser(inputFile[0].split(' ')[1]));
    for (i = 1; i < inputFile.length; i += 2) {

        x = utilities.intParser(inputFile[i].split(' ')[0]);
        y = utilities.intParser(inputFile[i].split(' ')[1]);
        orient = inputFile[i].split(' ')[2];

        mowerIntialPosition = new Position(x, y, orient);

        mowers[mowerIndex] = new Mower(mowerIntialPosition, perimeter);

        mowerCommands = inputFile[i + 1].split('');

        for (j = 0; j < mowerCommands.length; j++)
            mowers[mowerIndex].step(mowerCommands[j]);

        //(console.log(`The Mower n°${mowerIndex+1} stopped at the position : <${mowers[mowerIndex].position.x}, ${mowers[mowerIndex].position.y}, ${mowers[mowerIndex].position.orientation}>`);
        mowersEndPositions[mowerIndex] = { X: mowers[mowerIndex].position.x, Y: mowers[mowerIndex].position.y, Orientation: mowers[mowerIndex].position.orientation };
        mowerIndex++;
    }
    //console.log(mowersEndPositions);
    return mowersEndPositions;
};
module.exports.mowerTrigger = mowerTrigger;