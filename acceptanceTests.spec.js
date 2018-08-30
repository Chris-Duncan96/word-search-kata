const WordSearcher = require('./src/WordSearcher');
const exampleFileString = '../example.txt';
const fs = require('fs');

describe('WordSearch Acceptance', () =>{
    it('should search the example file and return the expected results', () => {
        const expectedOutput = fs.readFileSync('exampleOutput.txt', 'utf8');
        
        expect(WordSearcher(exampleFileString)).toEqual(expectedOutput);
    });
});
