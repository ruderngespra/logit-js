const fs = require('fs');
const path = require('path');

module.exports = fs
    .readdirSync(__dirname)
    .filter(
        fileName => fileName.startsWith('testCode_') && !fileName.endsWith('~')
    )
    .reduce((total, fileName) => {
        const selectorName = fileName.split('_')[1];
        const beforeOrAfter = fileName
            .split('_')[2]
            .slice(0, fileName.split('_')[2].length - 3);
        if (!total[selectorName]) {
            total[selectorName] = {};
        }
        total[selectorName][beforeOrAfter] = fs
            .readFileSync(path.resolve(__dirname, fileName))
            .toString();
        return total;
    }, {});
