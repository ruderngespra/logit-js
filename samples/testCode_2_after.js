(function() {
    var x;
    console.log('x: ', x);
    var doubleX;
    console.log('doubleX: ', doubleX);
    x = 23;
    console.log('x: ', x);
    function timesTwo(num) {
        console.log('num: ', num);
        return num * 2;
    }
    doubleX = timesTwo(x);
    console.log('doubleX: ', doubleX);
    var numbers;
    console.log('numbers: ', numbers);
})();
