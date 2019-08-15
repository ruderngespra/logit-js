const logVarDeclarators = require('./logVarDeclarators.js');
console.log('2:0', 'logVarDeclarators :', logVarDeclarators);
const logExpression = require('./logExpression.js');
console.log('4:0', 'logExpression :', logExpression);
const insertConsoleLogsIntoBody = require('./insertConsoleLogsIntoBody.js');
console.log('6:0', 'insertConsoleLogsIntoBody :', insertConsoleLogsIntoBody);
const logFunctionParams = require('./logFunctionParams.js');
console.log('8:0', 'logFunctionParams :', logFunctionParams);
const isInsideRegion = require('./isInsideRegion.js');
console.log('10:0', 'isInsideRegion :', isInsideRegion);

if (require.main == module) {
    console.log('8:4', 'In IfStatement (require.main == module)');
} else {
    console.log('10:4', 'In ElseStatement.');
    module.exports = require('webpack-dev-middleware')({ watchOptions: { aggregateTimeout: 300 }, publicPath: '/' });
    console.log('12:4', 'module.exports :', module.exports);
}

