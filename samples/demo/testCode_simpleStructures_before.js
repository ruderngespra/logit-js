let bar = 'hello ';
console.log('2:0', 'bar :', bar);
let foo = 'world';
console.log('4:0', 'foo :', foo);
let helloWorld = bar + foo;
console.log('6:0', 'helloWorld :', helloWorld);

const testObject = { hello: 'Hi', world: 'Earth' };

const { hello, world } = testObject;

function sayHiTo(name) {
    console.log('13:4', 'name :', name);
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
