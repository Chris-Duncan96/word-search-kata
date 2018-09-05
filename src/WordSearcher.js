const fs = require('fs');
const WordFinder = require('./WordFinder');

function WordSearcher(inputFile) {
    try {
        const inputText = fs.readFileSync(inputFile, 'utf8');
        const inputTextLines = inputText.split('\n',)
        const firstLine = inputTextLines[0];
        const wordsToFind = firstLine.split(',');
        const remainingLines = inputTextLines.slice(1);
        const grid = remainingLines.map((line) => line.split(','));

        WordFinder(wordsToFind, grid);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = WordSearcher;
