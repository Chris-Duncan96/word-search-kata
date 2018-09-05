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

    it('should call word finder with an array of strings to find, as read in by fs', () => {
        inputFile = './WordSearches/oneLine.txt';

        WordSearcher(inputFile);

        expect(WordFinder).toBeCalledWith(['EXAMPLE']);
    });
});
