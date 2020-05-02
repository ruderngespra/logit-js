const { hello, world } = { hello: 1, world: 2 };
console.log('2:0', 'world :', world);
console.log('3:0', 'hello :', hello);

bar = 34;
console.log('6:0', 'bar :', bar);

const test = {};
console.log('9:0', 'test :', test);
test.hey.ho = 4;
console.log('11:0', 'test.hey.ho :', test.hey.ho);

function foo(varName1) {
    // let newVar = varName1 * 2;
    console.log('15:4', 'varName1 :', varName1);
}

const bar = (varName1, varName2, varName3) => {
    console.log('19:4', 'varName3 :', varName3);
    console.log('20:4', 'varName2 :', varName2);
    console.log('21:4', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('23:4', 'newVar :', newVar);
};
console.log('25:0', 'bar :', bar);

if (hello >= 4) {
    foo();
    foo = bar;
    console.log('30:4', 'foo :', foo);
} else if (hello == 4) {
    foo();
} else {
    foo();
}

bar++;
console.log('38:0', 'bar :', bar);

(hello, he, ho, ha) => {
    console.log('41:4', 'ha :', ha);
    console.log('42:4', 'ho :', ho);
    console.log('43:4', 'he :', he);
    console.log('44:4', 'hello :', hello);
    return hello;
};

bye => {
    console.log('49:4', 'bye :', bye);
    return bye;
};

he => {
    console.log('54:4', 'he :', he);
    return he;
};

heww => {
    console.log('59:4', 'heww :', heww);
    return heww;
};

bar = 32423;
console.log('64:0', 'bar :', bar);
