const { hello, world } = { hello: 1, world: 2 };
console.log('2:0', 'world :', world);
console.log('3:0', 'hello :', hello);

bar = 34;
console.log('6:0', 'bar :', bar);

function foo(varName1) {
    // let newVar = varName1 * 2;
    console.log('10:2', 'varName1 :', varName1);
}

const bar = (varName1, varName2, varName3) => {
    console.log('14:2', 'varName3 :', varName3);
    console.log('15:2', 'varName2 :', varName2);
    console.log('16:2', 'varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('18:2', 'newVar :', newVar);
};
console.log('20:0', 'bar :', bar);

if (hello >= 4) {
    foo();
    foo = bar;
    console.log('25:2', 'foo :', foo);
} else if (hello == 4) {
    foo();
} else {
    foo();
}

bar++;
console.log('33:0', 'bar :', bar);

(hello, he, ho, ha) => {
    console.log('36:2', 'ha :', ha);
    console.log('37:2', 'ho :', ho);
    console.log('38:2', 'he :', he);
    console.log('39:2', 'hello :', hello);
    return hello;
};

bye => {
    console.log('44:2', 'bye :', bye);
    return bye;
};

he => {
    console.log('49:2', 'he :', he);
    return he;
};

heww => {
    console.log('54:2', 'heww :', heww);
    return heww;
};

bar = 32423;
console.log('59:0', 'bar :', bar);
