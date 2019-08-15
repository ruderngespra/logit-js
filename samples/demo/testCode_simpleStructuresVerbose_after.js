let bar = 'hello ';
console.log('2:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);
let foo = 'world';
console.log('5:0', 'foo :', foo);
console.log('typeof foo :', typeof foo);

let helloWorld = bar + foo;
console.log('9:0', 'helloWorld :', helloWorld);
console.log('typeof helloWorld :', typeof helloWorld);

const testObject = { hello: 'Hi', world: 'Earth' };
console.log('13:0', 'testObject :', testObject);
console.log('typeof testObject :', typeof testObject);

const { hello, world } = testObject;
console.log('17:0', 'world :', world);
console.log('typeof world :', typeof world);
console.log('19:0', 'hello :', hello);
console.log('typeof hello :', typeof hello);

function sayHiTo(name) {
    console.log('23:4', 'Function sayHiTo', 'name :', name);
    console.log('typeof name :', typeof name);
    return bar + name;
}

const sayHiWithFancyArrowFunction = name => {
    console.log('29:4', 'Function sayHiWithFancyArrowFunction', 'name :', name);
    console.log('typeof name :', typeof name);
    return bar + name;
};
console.log('33:0', 'sayHiWithFancyArrowFunction :', sayHiWithFancyArrowFunction);
console.log('typeof sayHiWithFancyArrowFunction :', typeof sayHiWithFancyArrowFunction);

if (bar.length >= 4) {
    console.log('37:4', 'In IfStatement (bar.length >= 4)');
    sayHiWithFancyArrowFunction('Alice');
} else if (bar.length < 4) {
    console.log('40:4', 'In IfStatement (bar.length < 4)');
    sayHiTo('Bob');
} else {
    console.log('43:4', 'In ElseStatement.');
    sayHiTo('God');
}
