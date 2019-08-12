const { hello, world } = { hello: 1, world: 2 };

bar = 34;

function foo(varName1, varName2, varName3) {
    console.log('6:4 ', 'varName3 :', varName3);
    console.log('7:4 ', 'varName2 :', varName2);
    console.log('8:4 ', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('10:4 ', 'newVar :', newVar);
}

if (hello >= 4) {
    console.log('14:4 ', 'In IfStatement (hello >= 4)');
    foo();
    foo = bar;
    console.log('17:4 ', 'foo :', foo);
} else if (hello == 4) {
    console.log('19:4 ', 'In IfStatement (hello == 4)');
    foo();
} else {
    console.log('22:4 ', 'In ElseStatement.');
    foo();
}

bar++;

(hello, he, ho, ha) => {
    return hello;
};

bye => bye;

he => {
    return he;
};

heww => {
    return heww;
};

bar = 32423;
