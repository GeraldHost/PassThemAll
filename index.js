const people = [
    {
        name: "Jake",
        lname: "Ford",
        details: {
            age: '24',
            dob: new Date()
        }
    },
    {
        name: "Theo",
        lname: "Ford",
        details: {
            age: '23',
            dob: new Date()
        }
    },
    {
        name: "Neil",
        lname: "Ford",
        details: {
            age: '29',
            dob: new Date()
        }
    }
];

/**
 * Count By Name
 * @param {Array} arr Array of names to count
 * @param {Object} peopel Array of names to count
 */
const countByName = (arr, people) => {
    return people.reduce((accumulator, value) => {
        arr.forEach(name => accumulator += name.toLowerCase() === value.name.toLowerCase());
        return accumulator;
    }, 0);
}

/**
 * Clone Object
 * @param {Object} obj
 */
const cloneObject = function (obj) {
    const result = {};
    const cloneValue = (value) => {
        if (typeof value !== 'object' || value instanceof Date) {
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

module.exports = { people, countByName, updatePeopleAgeFormat };