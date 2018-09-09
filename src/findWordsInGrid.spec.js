const findWordsInGrid = require('./findWordsInGrid');

describe('findWordsInGrid', () => {
    it('should be a function', () => {
        expect(typeof findWordsInGrid).toBe('function');
    });

    it('should return an object when given two arrays of strings as arguments', () => {
        const words = [''];
        const grid = [['']];

        const result = findWordsInGrid(words, grid)
        const expected = ['WORD: (0,0),(0,1),(0,2),(0,3)'];

        expect(typeof result).toEqual('object');
    });

    it('should be able to find a horizontal word when that word is the only thing in the grid', () => {
        const words = ['WORD'];
        const grid = [['W','O','R','D']];

        const result = findWordsInGrid(words, grid)
        const expected = ['WORD: (0,0),(0,1),(0,2),(0,3)'];

        expect(result).toEqual(expected);
    });

    it('should be able to find a horizontal word when that word when it is not on the first line', () => {
        const words = ['WORD'];
        const grid = [['A','A','A','A'],['W','O','R','D']];

        const result = findWordsInGrid(words, grid)
        const expected = ['WORD: (1,0),(1,1),(1,2),(1,3)'];

        expect(result).toEqual(expected);
    });

    it('should be able to find a horizontal word when that word when it is aligned on the right side of the grid', () => {
        const words = ['WORD'];
        const grid = [['A','W','O','R','D']];

        const result = findWordsInGrid(words, grid)
        const expected = ['WORD: (0,1),(0,2),(0,3),(0,4)'];

        expect(result).toEqual(expected);
    });
});
