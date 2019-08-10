// This function builds the console log node that afterwards is
// inserted in the plugin.

const template = require('@babel/template').default;

const consoleLogTemplate = template(`
console.log(%%varNameString%%, %%varNameIdentifier%%);
`);

let count = 0;

const consoleLogNode = (t, { name }) => {
    count++;
    const ast = consoleLogTemplate({
        varNameIdentifier: t.identifier(name),
        varNameString: t.stringLiteral(name + ' :'),
    });
    return ast;
    // return t.callExpression(
    //     t.memberExpression(t.identifier('console'), t.identifier('log')),
    //     [t.stringLiteral(name + ': '), t.identifier(name)]
    // );
};

consoleLogNode.count = function() {
    return count;
};

module.exports = consoleLogNode;
