const { hello, world } = { hello: 1, world: 2 };
console.log('2:0', 'world :', world);
console.log('typeof world :', typeof world);
console.log('4:0', 'hello :', hello);
console.log('typeof hello :', typeof hello);

bar = 34;
console.log('8:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);

const test = {};
console.log('12:0', 'test :', test);
console.log('typeof test :', typeof test);
test.hey.ho = 4;
console.log('15:0', 'test.hey.ho :', test.hey.ho);

function foo(varName1) {
    // let newVar = varName1 * 2;
    console.log('19:4', 'Function foo', 'varName1 :', varName1);
    console.log('typeof varName1 :', typeof varName1);
}

const bar = (varName1, varName2, varName3) => {
    console.log('24:4', 'Function bar', 'varName3 :', varName3);
    console.log('typeof varName3 :', typeof varName3);
    console.log('26:4', 'Function bar', 'varName2 :', varName2);
    console.log('typeof varName2 :', typeof varName2);
    console.log('28:4', 'Function bar', 'varName1 :', varName1);
    console.log('typeof varName1 :', typeof varName1);
    let newVar = varName1 * 2;
    console.log('31:4', 'Function bar', 'newVar :', newVar);
    console.log('typeof newVar :', typeof newVar);
};
console.log('34:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);

if (hello >= 4) {
    console.log('38:4', 'In IfStatement (hello >= 4)');
    foo();
    foo = bar;
    console.log('41:4', 'foo :', foo);
    console.log('typeof foo :', typeof foo);
} else if (hello == 4) {
    console.log('44:4', 'In IfStatement (hello == 4)');
    foo();
} else {
    console.log('47:4', 'In ElseStatement.');
    foo();
}

bar++;
console.log('52:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);

(hello, he, ho, ha) => {
    console.log('56:4', 'ha :', ha);
    console.log('typeof ha :', typeof ha);
    console.log('58:4', 'ho :', ho);
    console.log('typeof ho :', typeof ho);
    console.log('60:4', 'he :', he);
    console.log('typeof he :', typeof he);
    console.log('62:4', 'hello :', hello);
    console.log('typeof hello :', typeof hello);
    return hello;
};

bye => {
    console.log('68:4', 'bye :', bye);
    console.log('typeof bye :', typeof bye);
    return bye;
};

he => {
    console.log('74:4', 'he :', he);
    console.log('typeof he :', typeof he);
    return he;
};

heww => {
    console.log('80:4', 'heww :', heww);
    console.log('typeof heww :', typeof heww);
    return heww;
};

bar = 32423;
console.log('86:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);
