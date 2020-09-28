/**
 * parse and check an int value 
 * @param {string} param the input file
 */
function intParser(param) {
    intValue = parseInt(param, 10);
    if (Number.isInteger(intValue))
        return intValue;
    else
        throw new Error('File structure issue : an integer is expected');
};
module.exports.intParser = intParser;