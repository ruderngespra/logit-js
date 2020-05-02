let { hello, world } = { hello: 1, world: 2 };

hello = 34;

function foo(varName1, varName2, varName3) {
    let newVar = varName1 * 2;
}

if (hello >= 4) {
    foo();
    hello = world;
} else if (hello == 4) {
    foo();
} else {
    foo();
}

hello++;
