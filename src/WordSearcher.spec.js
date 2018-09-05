const fs = require('fs');
const Chance = require('chance');
const WordSearcher = require('./WordSearcher');
const WordFinder = require('./WordFinder');

jest.mock('./WordFinder');

const chance = new Chance();

describe('WordSearcher', () => {
    let inputFile;

    it('should call fs readFileSync with the given file, and the proper file format', () => {
        const fsReadFileSync = jest.spyOn(fs, 'readFileSync');
        inputFile = chance.word();

        WordSearcher(inputFile);

        expect(fsReadFileSync).toBeCalledWith(inputFile, 'utf8');
    });

    it('should call word finder with an array of strings to find, as read in by fs, as the first argument', () => {
        inputFile = './WordSearches/twoLine.txt';

        WordSearcher(inputFile);

        expect(WordFinder.mock.calls[0][0]).toEqual(['EXAMPLE']);
    });

    it('should call word finder with an array of arrays of letters from the grid as the second argument', () => {
        inputFile = './WordSearches/twoLine.txt';
        const expectedGrid = [
            ['E','X','A','M','P','L','E'],
            ['G','I','B','R','I','S','H']
        ];

        WordSearcher(inputFile);

        expect(WordFinder.mock.calls[0][1]).toEqual(expectedGrid);
    });
});
