const consoleLogNode = require('./consoleLogNode.js');
const template = require('@babel/template').default;

const realBody = template(`
{ return %%returnIdentifier%% }
`);

module.exports = (t, path) => {
    const body = path.get('body');
    // console.log('body.type: ', body.type);
    if (body.type == 'BlockStatement') {
        return path.node.params.forEach(node => {
            body.unshiftContainer('body', consoleLogNode(t, node));
        });
    } else if (path.node.params.length > 0) {
        const ast = realBody({
            returnIdentifier: body.node,
        });
        path.get('body').replaceWith(ast);
        return path.node.params.forEach(node => {
            body.unshiftContainer('body', consoleLogNode(t, node));
        });
    }
};
