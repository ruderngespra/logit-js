let bar = 'hello ';
console.log('2:0', 'bar :', bar);
let foo = 'world';
console.log('4:0', 'foo :', foo);

let helloWorld = bar + foo;
console.log('7:0', 'helloWorld :', helloWorld);

const testObject = { hello: 'Hi', world: 'Earth' };
console.log('10:0', 'testObject :', testObject);

const { hello, world } = testObject;
console.log('13:0', 'world :', world);
console.log('14:0', 'hello :', hello);

function sayHiTo(name) {
    console.log('17:4', 'name :', name);
    return bar + name;
}

const sayHiWithFancyArrowFunction = name => {
    console.log('22:4', 'name :', name);
    return bar + name;
};
console.log('25:0', 'sayHiWithFancyArrowFunction :', sayHiWithFancyArrowFunction);

if (bar.length >= 4) {
    sayHiWithFancyArrowFunction('Alice');
} else if (bar.length < 4) {
    sayHiTo('Bob');
} else {
    sayHiTo('God');
}
