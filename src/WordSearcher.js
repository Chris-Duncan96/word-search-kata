const fs = require('fs');
const findWordsInGrid = require('./findWordsInGrid');

function WordSearcher(inputFile) {
    try {
        const inputFromFile = fs.readFileSync(inputFile, 'utf8');
        const inputAsTextLines = inputFromFile.split('\n',)

        const firstLine = inputAsTextLines[0];
        const wordsToFind = firstLine.split(',');

        const remainingLines = inputAsTextLines.slice(1);
        const grid = remainingLines.map((line) => line.split(','));

        const wordLocations = findWordsInGrid(wordsToFind, grid);
        return wordLocations.join('\n');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = WordSearcher;
