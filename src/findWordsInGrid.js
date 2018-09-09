function searchRightFromLetter(wordAsArray, grid, rowIndex, letterIndex) {
    let letterLocations = '';
    let nextLetter = wordAsArray[0];
    let locationInWord = 0;
    while (letterIndex + locationInWord < grid[0].length) {
        let letter = grid[rowIndex][letterIndex + locationInWord];
        if (nextLetter === letter) {
            letterLocations += '('+rowIndex+','+(letterIndex + locationInWord)+')';
            nextLetter = wordAsArray[++locationInWord];
            if(locationInWord === wordAsArray.length) {
                console.log(letterLocations);
                return letterLocations;
            } else {
                letterLocations += ',';
            }
        } else {
            return null;
        }
    }
}

function searchDownFromLetter(wordAsArray, grid, rowIndex, letterIndex) {
    let letterLocations = '';
    let nextLetter = wordAsArray[0];
    let locationInWord = 0;
    while (rowIndex + locationInWord < grid.length) {
        let letter = grid[rowIndex+ locationInWord][letterIndex];
        if (nextLetter === letter) {
            letterLocations += '('+(rowIndex+locationInWord)+','+(letterIndex)+')';
            nextLetter = wordAsArray[++locationInWord];
            if(locationInWord === wordAsArray.length) {
                console.log(letterLocations);
                return letterLocations;
            } else {
                letterLocations += ',';
            }
        } else {
            return null;
        }
    }
}

function searchAroundLetter(word, grid, rowIndex, letterIndex) {
    let foundToTheRight = searchRightFromLetter(word, grid, rowIndex, letterIndex);
    if (foundToTheRight) { 
        return foundToTheRight;
    }
    return searchDownFromLetter(word, grid, rowIndex, letterIndex);
}

function getLetterLocations(word, grid) {
    const wordAsArray = word.split('');
    const firstLetter = wordAsArray[0];
    let letterLocations;

    grid.find((row, rowIndex) => {
        return row.find((letter, letterIndex) => {
            if (letter === firstLetter){
               letterLocations = searchAroundLetter(wordAsArray, grid, rowIndex, letterIndex);
               return letterLocations;
            }
        });
    });
    return letterLocations;
}

function findWordsInGrid(words, grid) {
    return words.map((word) => {
        return word + ': ' + getLetterLocations(word, grid);
    });
}

module.exports = findWordsInGrid;
