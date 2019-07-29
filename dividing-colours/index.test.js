const each = require('jest-each');
const { colourDivider } = require('./index.js');

test.each([
    [1, 'nope, not here'],
    [2, 'red'],
    [5, 'blue'],
    [11, 'green'],
    [13, 'nope, not here'],
    [15, 'blue'],
    [26, 'red'],
    [77, 'green'],
    [80, 'pink'],
    [91, 'nope, not here'],
    [98, 'red'],
    [108, 'red'],
    [428, 'red'],
    [821, 'nope, not here'],
    [1021, 'nope, not here'],
    [92001421, 'nope, not here'],
])('Passing %d should return %s', (num, expected) => {
    expect(colourDivider(num)).toBe(expected);
});