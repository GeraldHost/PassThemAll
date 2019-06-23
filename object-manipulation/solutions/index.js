const people = require('../people');
const raw = require('../raw');

/**
 * Count By Name
 * @param {Array} arr Array of names to count
 * @param {Object} peopel Array of names to count
 */
const countByName = (arr, people, inverse = false) => {
    let count = people.reduce((accumulator, value) => {
        for(let i = 0; i < arr.length; i++){
            accumulator += arr[i].toLowerCase() === value.name.toLowerCase();
        }
        return accumulator;
    }, 0);

    return inverse ? people.length - count : count;
}

/**
 * Clone Object
 * @param {Object} obj
 */
const cloneObject = function (obj) {
    const result = {};
    const cloneValue = (value) => {
        if (typeof value !== 'object' || typeof value === 'function') {
            return value;
        }
        if (Array.isArray(value)) {
            value.map(cloneValue);
        }
        return cloneObject(value);
    }
    Object.keys(obj).forEach(key => {
        result[key] = cloneValue(obj[key]);
    });
    return result;
}

/**
 * Update People Age Format
 * @param {Array} people people Array
 */
const updatePeopleAgeFormat = function (people) {
    let newPeople = people.map(cloneObject);
    return newPeople.map(person => {
        person.details.age = parseInt(person.details.age);
        return person;
    });
}

const addNewPeople = function (raw, people) {
    let newPeople = raw.split('\n').map((person) => person.split(','));
    newPeople = newPeople.map(person => {
        let age = parseInt(person[2]);
        return {
            name: person[0],
            lname: person[1],
            details: {
                age,
                dob: () => {
                    let date = new Date();
                    return new Date(date.setYear( date.getYear() - age ));
                }
            }
        };
    });
    return [...people, ...newPeople];
}

module.exports = { people, countByName, updatePeopleAgeFormat, addNewPeople };