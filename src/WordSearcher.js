const fs = require('fs');

function WordSearcher(inputFile) {
    try {
        fs.readFileSync(inputFile, 'utf8');
    }
    catch (e) {
        ;
    }
}

module.exports = WordSearcher;
