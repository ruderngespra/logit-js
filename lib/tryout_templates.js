const template = require('@babel/template').default;
const generate = require('@babel/generator').default;
const { types } = require('@babel/core');

const returnIdentifier = 'test';

const ast = template.ast(`
{ return ${returnIdentifier} }
`);

console.log(generate(ast).code);
