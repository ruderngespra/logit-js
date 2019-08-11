# logit-js
Lightweight debug utility.

Logit-js writes informative console logs into javascript files. It can
be integrated into an editor or used as a command line tool.

### Input

```js
let { hello, world } = { hello: 1, world: 2 };

hello = 34;

function foo(varName1, varName2, varName3) {
    let newVar = varName1 * 2;
}

if (hello >= 4) {
    foo();
    hello = world;
} else if (hello == 4) {
    foo();
} else {
    foo();
}

hello++;
```

### Output

```js
let { hello, world } = { hello: 1, world: 2 };
console.log('world :', world);
console.log('hello :', hello);

hello = 34;
console.log('hello :', hello);

function foo(varName1, varName2, varName3) {
    console.log('varName3 :', varName3);
    console.log('varName2 :', varName2);
    console.log('varName1 :', varName1);
    let newVar = varName1 * 2;
    console.log('newVar :', newVar);
}

if (hello >= 4) {
    console.log('In IfStatement (hello >= 4)');
    foo();
    hello = world;
    console.log('hello :', hello);
} else if (hello == 4) {
    console.log('In IfStatement (hello == 4)');
    foo();
} else {
    console.log('In ElseStatement.');
    foo();
}

hello++;
console.log('hello :', hello);
```

### Example Usage Editor

![Example Usage Editor](samples/readme/logit3.gif)fLyMd-mAkEr

Actively developed! Stable version not yet available.


