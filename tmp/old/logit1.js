const { readFileSync, writeFileSync } = require('fs');

let file;
const keywords = ['var', 'let', 'const'];

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

function logit(fileName) {
    try {
        file = readFileSync(fileName);
        const fileString = file.toString().replace(/\n/g, '');
        // console.log({ fileString });
        const fileArray = fileString.split(';');
        // console.log({ fileArray });
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
        console.log('Result: ', manipulatedFileString);
        // writeFileSync('logit_' + fileName, manipulatedFileString);
    } catch (err) {
        console.log(err.message);
        console.log('No file found.');
    }
}

logit(process.argv[2]);
