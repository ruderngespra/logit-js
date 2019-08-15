let result1 = [1, 23, 3];

const result = result1
    .map(number => number * 2)
    .filter(number => number % 2 == 0)
    .reduce((number, total) => (number += total));
