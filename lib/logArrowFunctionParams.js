const consoleLogNode = require('./consoleLogNode.js');
const template = require('@babel/template').default;

const realBody = template(`
{ return %%returnIdentifier%% }
`);

module.exports = (t, path) => {
    const body = path.get('body');
    if (body.type == 'BlockStatement') {
        return path.node.params.forEach(node => {
            body.unshiftContainer('body', consoleLogNode(t, node));
        });
    } else if (body.type == 'Identifier') {
        const ast = realBody({
            returnIdentifier: t.identifier(body.node.name),
        });
        path.get('body').replaceWith(ast);
        return path.node.params.forEach(node => {
            body.unshiftContainer('body', consoleLogNode(t, node));
        });
    }
};
