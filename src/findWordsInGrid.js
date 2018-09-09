function getLetterLocations(word, grid) {
    let letterLocations = '';
    const wordAsArray = word.split('');
    let locationInWord = 0;
    let nextLetter = wordAsArray[0];

    grid.some((row, rowIndex) => {
        row.some((letter, letterIndex) => {
            if(nextLetter === letter) {
                nextLetter = wordAsArray[++locationInWord];
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
        if(locationInWord === wordAsArray.length) {
            return letterLocations;
        }
    });
    return letterLocations;
}

function findWordsInGrid(words, grid) {
    return words.map((word) => {
        console.log(getLetterLocations(word, grid))
        return word + ': ' + getLetterLocations(word, grid);
    });
}

module.exports = findWordsInGrid;
