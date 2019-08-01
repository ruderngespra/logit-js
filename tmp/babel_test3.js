const babylon = require('babylon');
// Okay, mit dieser default sache scheint es zu gehen, aber das paket
// ist mutmaßlich nicht mehr aktuell?
const traverse = require('babel-traverse').default;

console.log('traverse: ', traverse);

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, {
    enter(path) {
        console.log('Entering!');
        if (path.node.type === 'Identifier' && path.node.name === 'n') {
            path.node.name = 'x';
        }
    },
});

console.log(ast);
