const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const generate = require('babel-generator').default;
const babel = require('@babel/core');
const fs = require('fs');

const myPlugin = require('./myFirstPlugin');

const firstInstanceOfMyPlugin = myPlugin(babel).visitor;

const fileString1 = fs.readFileSync('start.js').toString();

const ast = babylon.parse(fileString1);

traverse(ast, firstInstanceOfMyPlugin);

// Warum braucht das
console.log(generate(ast, {}, fileString1).code);
