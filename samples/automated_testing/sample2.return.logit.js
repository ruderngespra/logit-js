hello = 34;
console.log('2:0', 'hello :', hello);

function foo(varName1, varName2, varName3) {
    console.log('5:4', 'varName3 :', varName3);
    console.log('6:4', 'varName2 :', varName2);
    console.log('7:4', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('9:4', 'newVar :', newVar);
}

if (hello >= 4) {
    foo();
    hello = world;
    console.log('15:4', 'hello :', hello);
} else if (hello == 4) {
    foo();
} else {
    foo();
}

hello++;
console.log('23:0', 'hello :', hello);

hello => {
    console.log('26:4', 'hello :', hello);
    return hello;
};
