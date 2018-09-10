const fs = require('fs');
const WordSearcher = require('./WordSearcher');
const findWordsInGrid = require('./findWordsInGrid');

jest.mock('./findWordsInGrid');

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
            ['G','I','B','R','I','S','H']
        ];

        WordSearcher(defaultInputFile);

        expect(findWordsInGrid.mock.calls[0][1]).toEqual(expectedGrid);
    });

    it('should properly format what is returned from findWordsInGrid', () => {
        findWordsInGrid.mockImplementation(() => ['BONES: (0,6),(0,7),(0,8),(0,9),(0,10)', 'KHAN: (5,9),(5,8),(5,7),(5,6)']);
        const expectedReturn = 'BONES: (0,6),(0,7),(0,8),(0,9),(0,10)\nKHAN: (5,9),(5,8),(5,7),(5,6)';

        expect(WordSearcher(defaultInputFile)).toEqual(expectedReturn);
    });
});
