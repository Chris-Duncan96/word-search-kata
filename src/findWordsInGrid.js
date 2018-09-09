function getLetterLocations(word, grid) {
    let letterLocations = '';
    const wordAsArray = word.split('');
    let locationInWord = 0;

    grid.map((row, rowIndex) => {
        row.forEach((letter, letterIndex) => {
            if(wordAsArray[locationInWord] === letter) {
                locationInWord++;
                letterLocations += '('+rowIndex+','+letterIndex+')';
                if(locationInWord === wordAsArray.length) {
                    return letterLocations;
                } else {
                    letterLocations += ',';
                }
            } else {
                letterLocations = '';
                locationInWord = 0;
            }
        });
        return letterLocations;
    });
    return letterLocations;
}

function findWordsInGrid(words, grid) {
    return words.map((word) => {
        return word + ': ' + getLetterLocations(word, grid);
    });
}

module.exports = findWordsInGrid;
