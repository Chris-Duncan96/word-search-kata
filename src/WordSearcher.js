const fs = require('fs');
const WordFinder = require('./WordFinder');

function WordSearcher(inputFile) {
    try {
        const inputText = fs.readFileSync(inputFile, 'utf8');
        const firstLine = inputText.split('\n',)[0];
        const wordsToFind = firstLine.split(',');
        WordFinder(wordsToFind);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = WordSearcher;
