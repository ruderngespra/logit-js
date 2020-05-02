let { hello, world } = { hello: 1, world: 2 };
console.log('world :', world);
console.log('hello :', hello);

hello = 34;
console.log('hello :', hello);

function foo(varName1, varName2, varName3) {
    console.log('varName3 :', varName3);
    console.log('varName2 :', varName2);
    console.log('varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('newVar :', newVar);
}

if (hello >= 4) {
    console.log('In IfStatement (hello >= 4)');
    foo();
    hello = world;
    console.log('hello :', hello);
} else if (hello == 4) {
    console.log('In IfStatement (hello == 4)');
    foo();
} else {
    console.log('In ElseStatement.');
    foo();
}

hello++;
console.log('hello :', hello);
