const findWordsInGrid = require('./findWordsInGrid');

describe('findWordsInGrid', () => {
    it('should be a function', () => {
        expect(typeof findWordsInGrid).toBe('function');
    });

    it('should return an array of strings when given two arrays of strings as arguments', () => {
        const words = [''];
        const grid = [''];

        const result = findWordsInGrid(words, grid)
        const expected = ['WORD: (0,0),(0,1),(0,2),(0,3)'];

        expect(typeof result).toEqual('object');
        expect(typeof result[0]).toEqual('string');
    });

    it('should be able to find a horizontal word', () => {
        const words = ['WORD'];
        const grid = ['W','O','R','D'];

        const result = findWordsInGrid(words, grid)
        const expected = ['WORD: (0,0),(0,1),(0,2),(0,3)'];

        expect(result).toEqual(expected);
    });
});
