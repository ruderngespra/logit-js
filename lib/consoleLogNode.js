// This function builds the console log node that afterwards is
// inserted in the plugin.

const template = require('@babel/template').default;
const generate = require('@babel/generator').default;

const consoleLogTemplateVarName = template(`
console.log(%%string%%, %%identifier%%);
`);

const consoleLogTemplateInfo = template(`
console.log(%%infoString%%);
`);

// let count = 0;

const consoleLogNode = (t, options) => {
    let ast;
    let { type } = options;
    console.log('type: ', type);
    if (type == 'varName') {
        const { varName } = options.info;
        ast = consoleLogTemplateVarName({
            identifier: t.identifier(varName),
            string: t.stringLiteral(varName + ' :'),
        });
    } else if (type == 'info') {
        const { condition, parentType } = options.info;
        let expressionCode = generate(condition).code;
        ast = consoleLogTemplateInfo({
            infoString: t.stringLiteral(
                'In ' + parentType + ': ' + expressionCode
            ),
        });
    }
    return ast;
};

// count++;
// return t.callExpression(
//     t.memberExpression(t.identifier('console'), t.identifier('log')),
//     [t.stringLiteral(name + ': '), t.identifier(name)]
// );

// consoleLogNode.count = function() {
//     return count;
// };

module.exports = consoleLogNode;
