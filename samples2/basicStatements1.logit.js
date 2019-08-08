var x = 5;
console.log('x: ', x);
x = 23;
function timesTwo(num) {
    return num * 2;
}
let doubleX = timesTwo(x);
console.log('doubleX: ', doubleX);
hello = x > 20 && 12;
let testObject = { hello: 23, goodbey: 'sdfasfd' };
console.log('testObject: ', testObject);
let { hello: hey, goodbye } = testObject;
console.log('goodbye: ', goodbye);
console.log('hey: ', hey);
