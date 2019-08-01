// Sehr geil: Allein mit Hilfe dieser drei Module laufe ich einmal
// rein in den ast, ändere dort eine Kleinigkeit, und laufe wieder
// raus und habe neuen Code, der andere Variablennamen hat!

const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const generate = require('babel-generator').default;

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

console.log(generate(ast, {}, code));
