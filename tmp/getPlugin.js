const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const generate = require('babel-generator').default;
const babel = require('@babel/core');

const myPlugin = require('./myFirstPlugin');

// Das Plugin hat verschiedene Visitor, und die wirft man dann in das traverse Ding rein. Im Moment gibt es nur einen dummy visitor.
const firstInstanceOfMyPlugin = myPlugin(babel).visitor;

const code = `function square(n) {
  foo === bar
  return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, firstInstanceOfMyPlugin);

console.log(generate(ast, {}, code));
