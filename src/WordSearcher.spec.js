const fs = require('fs');
const WordSearcher = require('./WordSearcher');
const findWordsInGrid = require('./findWordsInGrid');

jest.mock('./findWordsInGrid');
console.log = jest.fn(); // Disabling unneccesary logging in jest tests

describe('WordSearcher', () => {
    const defaultInputFile = './WordSearches/twoLine.txt';

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call word finder with an array of strings to find, as read in by fs, as the first argument', () => {
        WordSearcher(defaultInputFile);

        expect(findWordsInGrid.mock.calls[0][0]).toEqual(['EXAMPLE']);
    });

    it('should call word finder with an array of arrays of letters from the grid as the second argument', () => {
        const expectedGrid = [
            ['E','X','A','M','P','L','E'],
            ['~','~','~','~','~','~','~']
        ];

        WordSearcher(defaultInputFile);

        expect(findWordsInGrid.mock.calls[0][1]).toEqual(expectedGrid);
    });

    it('should format the return such that each element in the array is on its own line', () => {
        findWordsInGrid.mockImplementation(() => [
            'EXAMPLE: (0,0),(1,0),(2,0),(3,0),(4,0),(5,0)', 
            '~~~~~~: (0,1),(1,1),(2,1),(3,1),(4,1),(5,1)'
        ]);

        const expectedReturn = 'EXAMPLE: (0,0),(1,0),(2,0),(3,0),(4,0),(5,0)\n~~~~~~: (0,1),(1,1),(2,1),(3,1),(4,1),(5,1)';

        expect(WordSearcher(defaultInputFile)).toEqual(expectedReturn);
    });
});
