const { readFileSync, writeFileSync } = require('fs');
const chalk = require('chalk');
const log = console.log;

// const selectScope = require('./selectScope.js');
// const format = require('./format.js');

function appendLog(line) {
    const rowArray = line.split(' ');
    const varKeywordName = rowArray.find(element =>
        keywords.indexOf(element) != -1
            ? rowArray[rowArray.indexOf(element) + 1]
            : false
    );
    const varName = rowArray.find(
        (element, index) => rowArray[index - 1] == varKeywordName
    );
    return (line += `;console.log({${varName}})`);
}

let file;
const keywords = ['var', 'let', 'const'];

function logit(fileName) {
    try {
        file = readFileSync(fileName);
        const fileString = format(file.toString());
        console.log('fileString: ', fileString);
        // .replace(/\n/g, '');
        const { scopeString, startIndex } = selectScope(fileString, {
            start: 'lg-start',
            end: 'lg-end',
        });
        const fileArray = scopeString.split(';');
        const logOrNot = fileArray.map(row =>
            keywords.some(keyword => row.includes(keyword))
                ? [row, true]
                : [row, false]
        );
        const manipulatedFileArray = logOrNot.map(row => {
            if (row[1]) {
                return appendLog(row[0]);
            } else {
                return row[0];
            }
        });
        // console.log({ manipulatedFileArray });
        const manipulatedFileString = manipulatedFileArray.join(';');
        // console.log('Result: ', manipulatedFileString);
        // writeFileSync('logit_' + fileName, manipulatedFileString);
    } catch (err) {
        console.log('Error: ', err.message);
    }
}

logit(process.argv[2]);

module.exports = string => {
    if (typeof string != 'string') {
        return { success: false, error: 'Invalid input type' };
    }
};
