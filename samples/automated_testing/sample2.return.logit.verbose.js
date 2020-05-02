hello = 34;
console.log('2:0', 'hello :', hello);
console.log('typeof hello :', typeof hello);

function foo(varName1, varName2, varName3) {
    console.log('6:4', 'Function foo', 'varName3 :', varName3);
    console.log('typeof varName3 :', typeof varName3);
    console.log('8:4', 'Function foo', 'varName2 :', varName2);
    console.log('typeof varName2 :', typeof varName2);
    console.log('10:4', 'Function foo', 'varName1 :', varName1);
    console.log('typeof varName1 :', typeof varName1);
    let newVar = varName1 * 2;
    console.log('13:4', 'Function foo', 'newVar :', newVar);
    console.log('typeof newVar :', typeof newVar);
}

if (hello >= 4) {
    console.log('18:4', 'In IfStatement (hello >= 4)');
    foo();
    hello = world;
    console.log('21:4', 'hello :', hello);
    console.log('typeof hello :', typeof hello);
} else if (hello == 4) {
    console.log('24:4', 'In IfStatement (hello == 4)');
    foo();
} else {
    console.log('27:4', 'In ElseStatement.');
    foo();
}

hello++;
console.log('32:0', 'hello :', hello);
console.log('typeof hello :', typeof hello);

hello => {
    console.log('36:4', 'hello :', hello);
    console.log('typeof hello :', typeof hello);
    return hello;
};
