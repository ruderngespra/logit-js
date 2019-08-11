// This function builds the console log node that afterwards is
// inserted in the plugin.

const template = require('@babel/template').default;
const generate = require('@babel/generator').default;

const consoleLogTemplate = template(`
console.log(%%varNameString%%, %%varNameIdentifier%%);
`);

const consoleLogTemplateInfo = template(`
console.log(%%infoString%%);
`);

// let count = 0;

const consoleLogNode = (t, options) => {
    let ast;
    let { type } = options;
    if (type == undefined) {
        type = 'var';
    }
    if (type == 'var') {
        ast = consoleLogTemplate({
            varNameIdentifier: t.identifier(options.varName),
            varNameString: t.stringLiteral(options.varName + ' :'),
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
    // count++;
    return ast;
    // return t.callExpression(
    //     t.memberExpression(t.identifier('console'), t.identifier('log')),
    //     [t.stringLiteral(name + ': '), t.identifier(name)]
    // );
};

// consoleLogNode.count = function() {
//     return count;
// };

module.exports = consoleLogNode;
