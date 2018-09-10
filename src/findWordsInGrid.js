function locationIsInGrid(grid, x, y) {
    return  x >= 0 &&
            y >= 0 &&
            x < grid[0].length &&
            y < grid.length;
}

function formatLocation(x, y) {
    return '(' + (x) + ',' + (y) + ')';
}

function directionalSearch(wordAsArray, grid, rowIndex, letterIndex, rowDirection, letterDirection) {
    let letterLocations = '';
    let nextLetter = wordAsArray[0];
    let locationInWord = 0;
    let x = letterIndex + letterDirection * locationInWord;
    let y = rowIndex + rowDirection * locationInWord;
    while (locationIsInGrid(grid, x, y)) {
        let letter = grid[y][x];
        if (nextLetter === letter) {
            letterLocations += formatLocation(x, y);

            nextLetter = wordAsArray[++locationInWord];
            if (locationInWord === wordAsArray.length) {
                return letterLocations;
            } else {
                letterLocations += ',';
            }
        } else {
            return null;
        }
        x = letterIndex + letterDirection * locationInWord;
        y = rowIndex + rowDirection * locationInWord;
    }
}

function searchAroundLetter(wordAsArray, grid, rowIndex, letterIndex) {
    const directions = [-1,0,1];
    let searchResults;

    directions.some((rowDirection) => {
        return directions.some((letterDirection) => {
            if (letterDirection !== 0 || rowDirection !== 0) {
                searchResults = directionalSearch(wordAsArray, grid, rowIndex, letterIndex, rowDirection, letterDirection);
                return searchResults;
            }
        });
    });

    return searchResults;
}

function getLetterLocations(word, grid) {
    const wordAsArray = word.split('');
    const firstLetter = wordAsArray[0];
    let letterLocations;

    grid.some((row, rowIndex) => {
        return row.some((letter, letterIndex) => {
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
