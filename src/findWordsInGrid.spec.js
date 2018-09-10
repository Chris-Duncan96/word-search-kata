const findWordsInGrid = require('./findWordsInGrid');

describe('findWordsInGrid', () => {
    describe('output format', () => {
        it('should be a function', () => {
            expect(typeof findWordsInGrid).toBe('function');
        });

        it('should return an object when given two arrays of strings as arguments', () => {
            const words = [''];
            const grid = [['']];
    
            const result = findWordsInGrid(words, grid)
    
            expect(typeof result).toEqual('object');
        });
    });

    describe('directional search', () => {
        it('should find a horizontal word when that word is the only thing in the grid', () => {
            const words = ['WORD'];
            const grid = [['W','O','R','D']];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (0,0),(1,0),(2,0),(3,0)'];
    
            expect(result).toEqual(expected);
        });
    
        it('should find a horizontal word when that word when it is not on the first line', () => {
            const words = ['WORD'];
            const grid = [
                            ['~','~','~','~'],
                            ['W','O','R','D']
                        ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (0,1),(1,1),(2,1),(3,1)'];
    
            expect(result).toEqual(expected);
        });
    
        it('should find a horizontal word when that word when it is aligned on the right side of the grid', () => {
            const words = ['WORD'];
            const grid = [['~','W','O','R','D']];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (1,0),(2,0),(3,0),(4,0)'];
    
            expect(result).toEqual(expected);
        });

        it('should find multiple horizontal words', () => {
            const words = ['WORD','TEST'];
            const grid = [
                            ['W','O','R','D'],
                            ['T','E','S','T']
                        ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (0,0),(1,0),(2,0),(3,0)',
                            'TEST: (0,1),(1,1),(2,1),(3,1)'];
    
            expect(result).toEqual(expected);
        });

        it('should find a horizontal word in the center of the grid', () => {
            const words = ['WORD'];
            const grid =    [['~','~','~','~','~','~'],
                            ['~','W','O','R','D','~'],
                            ['~','~','~','~','~','~']];
                            
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (1,1),(2,1),(3,1),(4,1)'];
    
            expect(result).toEqual(expected);
        });

        it('should find a reverse horizontal word in the center of the grid', () => {
            const words = ['WORD'];
            const grid =    [['~','~','~','~','~','~'],
                            ['~','D','R','O','W','~'],
                            ['~','~','~','~','~','~']];
                            
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (4,1),(3,1),(2,1),(1,1)'];
    
            expect(result).toEqual(expected);
        });
    
        it('should find vertical words when they are the only thing in the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['W'],
                ['O'],
                ['R'],
                ['D']
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (0,0),(0,1),(0,2),(0,3)'];
    
            expect(result).toEqual(expected);
        });

        it('should find vertical words when placed on the bottom right of the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['~','~'],
                ['~','W'],
                ['~','O'],
                ['~','R'],
                ['~','D']
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (1,1),(1,2),(1,3),(1,4)'];
    
            expect(result).toEqual(expected);
        });

        it('should find vertical words in the center of the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['~','~','~'],
                ['~','W','~'],
                ['~','O','~'],
                ['~','R','~'],
                ['~','D','~'],
                ['~','~','~']
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (1,1),(1,2),(1,3),(1,4)'];
    
            expect(result).toEqual(expected);
        });

        it('should find reverse vertical words in the center of the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['~','~','~'],
                ['~','D','~'],
                ['~','R','~'],
                ['~','O','~'],
                ['~','W','~'],
                ['~','~','~']
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (1,4),(1,3),(1,2),(1,1)'];
    
            expect(result).toEqual(expected);
        });

        it('should find downward slant words in the center of the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['~','~','~','~','~','~'],
                ['~','W','~','~','~','~'],
                ['~','~','O','~','~','~'],
                ['~','~','~','R','~','~'],
                ['~','~','~','~','D','~'],
                ['~','~','~','~','~','~'],
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (1,1),(2,2),(3,3),(4,4)'];
    
            expect(result).toEqual(expected);
        });

        it('should find upward slant words in the center of the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['~','~','~','~','~','~'],
                ['~','~','~','~','D','~'],
                ['~','~','~','R','~','~'],
                ['~','~','O','~','~','~'],
                ['~','W','~','~','~','~'],
                ['~','~','~','~','~','~'],
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (1,4),(2,3),(3,2),(4,1)'];
    
            expect(result).toEqual(expected);
        });

        it('should find reversed downward slant words in the center of the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['~','~','~','~','~','~'],
                ['~','D','~','~','~','~'],
                ['~','~','R','~','~','~'],
                ['~','~','~','O','~','~'],
                ['~','~','~','~','W','~'],
                ['~','~','~','~','~','~'],
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (4,4),(3,3),(2,2),(1,1)'];
    
            expect(result).toEqual(expected);
        });

        it('should find reversed upward slant words in the center of the grid', () => {
            const words = ['WORD'];
            const grid = [
                ['~','~','~','~','~','~'],
                ['~','~','~','~','W','~'],
                ['~','~','~','O','~','~'],
                ['~','~','R','~','~','~'],
                ['~','D','~','~','~','~'],
                ['~','~','~','~','~','~'],
            ];
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (4,1),(3,2),(2,3),(1,4)'];
    
            expect(result).toEqual(expected);
        });

        it('should not return partial finds as the full word when searching horizontally', () => {
            const words = ['WORD'];
            const grid =    [['W','O','R','~','~'],
                            ['W','O','R','D','~']];
                            
    
            const result = findWordsInGrid(words, grid)
            const expected = ['WORD: (0,1),(1,1),(2,1),(3,1)'];
    
            expect(result).toEqual(expected);
        });
    })

});
