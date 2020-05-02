const { hello, world } = {
    hello: 1,
    world: 2,
};

console.log('6:0', 'world :', world);
console.log('typeof world :', typeof world);
console.log('8:0', 'hello :', hello);
console.log('typeof hello :', typeof hello);

bar = 34;
console.log('12:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);

const test = {};
console.log('16:0', 'test :', test);
console.log('typeof test :', typeof test);
test.hey.ho = 4;
console.log('19:0', 'test.hey.ho :', test.hey.ho);

function foo(varName1) {
    // let newVar = varName1 * 2;
    console.log('23:4', 'Function foo', 'varName1 :', varName1);
    console.log('typeof varName1 :', typeof varName1);
}

const bar = (varName1, varName2, varName3) => {
    console.log('28:4', 'Function bar', 'varName3 :', varName3);
    console.log('typeof varName3 :', typeof varName3);
    console.log('30:4', 'Function bar', 'varName2 :', varName2);
    console.log('typeof varName2 :', typeof varName2);
    console.log('32:4', 'Function bar', 'varName1 :', varName1);
    console.log('typeof varName1 :', typeof varName1);
    let newVar = varName1 * 2;
    console.log('35:4', 'Function bar', 'newVar :', newVar);
    console.log('typeof newVar :', typeof newVar);
};
console.log('38:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);

if (hello >= 4) {
    console.log('42:4', 'In IfStatement (hello >= 4)');
    foo();
    foo = bar;
    console.log('45:4', 'foo :', foo);
    console.log('typeof foo :', typeof foo);
} else if (hello == 4) {
    console.log('48:4', 'In IfStatement (hello == 4)');
    foo();
} else {
    console.log('51:4', 'In ElseStatement.');
    foo();
}

bar++;
console.log('56:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);

(hello, he, ho, ha) => {
    console.log('60:4', 'ha :', ha);
    console.log('typeof ha :', typeof ha);
    console.log('62:4', 'ho :', ho);
    console.log('typeof ho :', typeof ho);
    console.log('64:4', 'he :', he);
    console.log('typeof he :', typeof he);
    console.log('66:4', 'hello :', hello);
    console.log('typeof hello :', typeof hello);
    return hello;
};

bye => {
    console.log('72:4', 'bye :', bye);
    console.log('typeof bye :', typeof bye);
    return bye;
};

he => {
    console.log('78:4', 'he :', he);
    console.log('typeof he :', typeof he);
    return he;
};

heww => {
    console.log('84:4', 'heww :', heww);
    console.log('typeof heww :', typeof heww);
    return heww;
};

bar = 32423;
console.log('90:0', 'bar :', bar);
console.log('typeof bar :', typeof bar);
