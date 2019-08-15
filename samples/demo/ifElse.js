function doSomething() {
    return 1 + 1;
}
function doSomethingElse() {
    return 2 + 2;
}
function doNothing() {}

if (2 + 2 == 5 || 2 + 2 == 3) {
    doSomething();
} else if (2 + 2 == 4) {
    doSomethingElse();
} else {
    doNothing();
}
