/**
 * 
 * @param {int} num 
 * 
 * 1.1) If the number is dividable by 2 return 'red';
 * 1.2) If the number is dividable by 5 return 'blue';
 * 1.3) If the number is dividable by 11 return 'green';
 * 1.4) If the number is dividable by 2 and 5 return 'pink';
 * 1.5) If the number is dividable by 2 and 11 return 'orange';
 * 1.6) If the number is dividable by 5 and 11 return 'black';
 * 1.7) If the number is dividable by 5, 2 and 11 return 'yellow';
 */
const colourDivider = function (num) {
    let map = {
        2:  'red', // divide by 2
        5:  'blue', // divide by 5
        11: 'green', // divide by 11
        7:  'pink', // divide by 2 and 5
        13: 'orange', // divide by 2 and 11
        16: 'black', // divide by 5 and 11
        18: 'yellow' // divide by all three
    };
    let out = [2, 5, 11].reduce((count, value) => {
        return !(num % value) ? count + value : count;
    }, 0);
    return map[out] || 'nope, not here';
}

module.exports = { colourDivider };