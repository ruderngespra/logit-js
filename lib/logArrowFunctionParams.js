const consoleLogNode = require('./consoleLogNode.js');
const template = require('@babel/template').default;

const realBody = template(`
{ return %%returnIdentifier%% }
`);

module.exports = (t, path) => {
    let body = path.get('body');
    if (path.node.params.length > 0 && body.type != 'BlockStatement') {
        const ast = realBody({
            returnIdentifier: body.node,
        });
        path.get('body').replaceWith(ast);
    }
    return path.node.params.forEach(node => {
        body.unshiftContainer(
            'body',
            consoleLogNode(t, { type: 'varName', info: { varName: node.name } })
        );
    });
};
