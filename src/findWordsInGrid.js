function locationIsInGrid(grid, y, x) {
    return  x >= 0 &&
            y >= 0 &&
            x < grid[0].length &&
            y < grid.length;
}

function formatLocation(x, y) {
    return '(' + (x) + ',' + (y) + ')';
}

function directionalSearch(wordAsArray, grid, initialRowIndex, initialLetterIndex, {verticalDirection, horizontalDirection}) {
    let locationsOfLetters = '';
    let locationInWord = 0;
    let x = initialLetterIndex;
    let y = initialRowIndex;

    do {
        let nextLetterInWord = wordAsArray[locationInWord++]
        let nextLetterInGrid = grid[y][x];

        if (nextLetterInWord === nextLetterInGrid) {
            locationsOfLetters += formatLocation(x, y);
            if (wordAsArray.length === locationInWord) {
                return locationsOfLetters;
            } else {
                locationsOfLetters += ',';
            }
        } else {
            return null;
        }

        x += horizontalDirection;
        y += verticalDirection;
    } while ((locationIsInGrid(grid, y, x)))
}

function searchAroundLetter(wordAsArray, grid, rowIndex, letterIndex) {
    const directions = [-1,0,1];
    let foundWord, directionPair;

    directions.some((verticalDirection) => {
        return directions.some((horizontalDirection) => {
            if (verticalDirection !== 0 || horizontalDirection !== 0) {
                directionPair = {verticalDirection, horizontalDirection};
                foundWord = directionalSearch(wordAsArray, grid, rowIndex, letterIndex, directionPair);
                if (foundWord) {
                    return foundWord;
                }
            }
        });
    });

    return foundWord;
}

function findLocationsOfLetters(word, grid) {
    const wordAsArray = word.split('');
    const firstLetter = wordAsArray[0];
    let foundLetters;

    grid.some((row, rowIndex) => {
        return row.some((letter, letterIndex) => {
            if (letter === firstLetter){
                foundLetters = searchAroundLetter(wordAsArray, grid, rowIndex, letterIndex);
                if (foundLetters) {
                    return foundLetters;
                }
            }
        });
    });

    return foundLetters;
}

function findWordsInGrid(words, grid) {
    return words.map((word) => {
        return word + ': ' + findLocationsOfLetters(word, grid);
    });
}

module.exports = findWordsInGrid;
