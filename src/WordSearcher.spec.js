const WordSearcher = require('./WordSearcher');
const fs = require('fs');
const Chance = require('chance');

const chance = new Chance();


describe('WordSearcher', () => {
    it('should call fs readFileSync with the given file, and the proper file format', () => {
        const fsReadFileSync = jest.spyOn(fs, 'readFileSync');

        const inputFile = chance.word();
        WordSearcher(inputFile);

        expect(fsReadFileSync).toBeCalledWith(inputFile, 'utf8');
    });
});
