(function() {
    var x;
    console.log('x: ', x);
    var doubleX;
    console.log('doubleX: ', doubleX);
    x = 23;
    function timesTwo(num) {
        return num * 2;
    }
    doubleX = timesTwo(x);
    var numbers;
    console.log('numbers: ', numbers);
})();
