const fs = require('fs');
const findWordsInGrid = require('./findWordsInGrid');

function WordSearcher(inputFile) {
    try {
        const inputText = fs.readFileSync(inputFile, 'utf8');
        const inputTextLines = inputText.split('\n',)

        const firstLine = inputTextLines[0];
        const wordsToFind = firstLine.split(',');
        const remainingLines = inputTextLines.slice(1);
        const grid = remainingLines.map((line) => line.split(','));

        const foundWords = findWordsInGrid(wordsToFind, grid);

        return foundWords.join('\n');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = WordSearcher;
