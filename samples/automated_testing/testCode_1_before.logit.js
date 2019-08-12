const { hello, world } = { hello: 1, world: 2 };

bar = 34;

function foo(varName1, varName2, varName3) {
    console.log('6:4 ', 'varName3 :', varName3);
    console.log('7:4 ', 'varName2 :', varName2);
    console.log('8:4 ', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('10:4 ', 'newVar :', newVar);
}

const bar = (varName1, varName2, varName3) => {
    console.log('14:4 ', 'varName3 :', varName3);
    console.log('15:4 ', 'varName2 :', varName2);
    console.log('16:4 ', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('18:4 ', 'newVar :', newVar);
};
console.log('20:0 ', 'bar :', bar);

if (hello >= 4) {
    foo();
    foo = bar;
} else if (hello == 4) {
    foo();
} else {
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
