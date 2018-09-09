const fs = require('fs');
const WordSearcher = require('./WordSearcher');
const findWordsInGrid = require('./findWordsInGrid');

jest.mock('./findWordsInGrid');

describe('WordSearcher', () => {
    let inputFile;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call word finder with an array of strings to find, as read in by fs, as the first argument', () => {
        inputFile = './WordSearches/twoLine.txt';

        WordSearcher(inputFile);

        expect(findWordsInGrid.mock.calls[0][0]).toEqual(['EXAMPLE']);
    });

    it('should call word finder with an array of arrays of letters from the grid as the second argument', () => {
        inputFile = './WordSearches/twoLine.txt';
        const expectedGrid = [
            ['E','X','A','M','P','L','E'],
            ['G','I','B','R','I','S','H']
        ];

        WordSearcher(inputFile);

        expect(findWordsInGrid.mock.calls[0][1]).toEqual(expectedGrid);
    });
});
