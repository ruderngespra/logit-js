const { hello, world } = { hello: 1, world: 2 };
console.log('2:0', 'world :', world);
console.log('3:0', 'hello :', hello);

bar = 34;
console.log('6:0', 'bar :', bar);

function foo(varName1, varName2, varName3) {
    console.log('9:4', 'varName3 :', varName3);
    console.log('10:4', 'varName2 :', varName2);
    console.log('11:4', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('13:4', 'newVar :', newVar);
}

const bar = (varName1, varName2, varName3) => {
    console.log('17:4', 'varName3 :', varName3);
    console.log('18:4', 'varName2 :', varName2);
    console.log('19:4', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('21:4', 'newVar :', newVar);
};
console.log('23:0', 'bar :', bar);

if (hello >= 4) {
    foo();
    foo = bar;
    console.log('28:4', 'foo :', foo);
} else if (hello == 4) {
    foo();
} else {
    foo();
}

bar++;
console.log('36:0', 'bar :', bar);

(hello, he, ho, ha) => {
    console.log('39:4', 'ha :', ha);
    console.log('40:4', 'ho :', ho);
    console.log('41:4', 'he :', he);
    console.log('42:4', 'hello :', hello);
    return hello;
};

bye => {
    console.log('47:4', 'bye :', bye);
    return bye;
};

he => {
    console.log('52:4', 'he :', he);
    return he;
};

heww => {
    console.log('57:4', 'heww :', heww);
    return heww;
};

bar = 32423;
console.log('62:0', 'bar :', bar);
