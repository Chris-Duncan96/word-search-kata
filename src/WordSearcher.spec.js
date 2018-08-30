const WordSearcher = require('./WordSearcher');

describe('WordSearcher', () => {
    it('should return the string "file" when searchFile is called', () => {
        expect(WordSearcher.searchFile()).toEqual('file');
    });

    it('should return the string "string" when searchString is called', () => {
        expect(WordSearcher.searchString()).toEqual('string');
    });
});
