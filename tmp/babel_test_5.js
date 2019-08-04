const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const generate = require('babel-generator').default;
const fs = require('fs');

// const code = `function square(n) {
//   return n * n;
// }`;

const fileString1 = fs.readFileSync('start.js').toString();

const ast = babylon.parse(fileString1);

traverse(ast, {
    enter(path) {
        console.log('path.node.type: ', path.node.type);
        if (path.node.type === 'Identifier' && path.node.name === 'hello') {
            console.log('path.node.name: ', path.node.name);
            path.node.name = path.node.name.toUpperCase();
        }
    },
});

const logAST = require('./testConsoleLogAST');

console.log('ast: ', ast);
console.log('logAST: ', logAST);

// console.log({ logAST });

const final = generate(logAST, {}, '');

// fs.writeFileSync('result.js', final.code);
