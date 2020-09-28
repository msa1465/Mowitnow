const fs = require('fs');
const assert = require('assert');
const mowerTrigger = require('../app/mowerTrigger').mowerTrigger;

var expectedEndPositions = [
    { X: 1, Y: 3, Orientation: 'N' },
    { X: 5, Y: 1, Orientation: 'E' }
];

describe('endPositions', () => {
    it('It should return endPositions : \n\t<1, 3, N> \n\t<5, 1, E>', () => {

        fs.readFile('./input/test.txt', encoding = 'utf-8', (err, data) => {
            if (err)
                return console.error('File not found.', err);
            var inputFile = data.split(/\r?\n/);
            var endPositions = mowerTrigger(inputFile);
            for (i = 1; i < endPositions.length; i++)
                for (var j in endPositions[i])
                    assert.equal(endPositions[i][j], expectedEndPositions[i][j]);
        });
    });
});