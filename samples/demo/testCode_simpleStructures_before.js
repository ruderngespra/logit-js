let bar = 'hello ';
let foo = 'world';

let helloWorld = bar + foo;

const testObject = { hello: 'Hi', world: 'Earth' };

const { hello, world } = testObject;

function sayHiTo(name) {
    return bar + name;
}

const sayHiWithFancyArrowFunction = name => bar + name;

if (bar.length >= 4) {
    sayHiWithFancyArrowFunction('Alice');
} else if (bar.length < 4) {
    sayHiTo('Bob');
} else {
    sayHiTo('God');
}
