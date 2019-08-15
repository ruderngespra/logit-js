let result1 = [1, 23, 3];

const result = result1
    .map(number => {
        console.log('5:8', 'number :', number);
        return number * 2;
    })
    .filter(number => {
        console.log('9:8', 'number :', number);
        return number % 2 == 0;
    })
    .reduce((number, total) => (number += total));

const hello = (number += total);
