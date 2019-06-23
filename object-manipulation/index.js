const people = require('./people');
const raw = require('./raw');
/**
 * 1) Count people by name
 * 
 * @param {Array} arr Array of names to count
 * @param {Object} peopel Array of names to count
 * 
 * 1.1) The function should recieve an array of names to count for
 * 1.2) The counting should be case incensitive
 * 1.3) If inverse is set to true the function should count people 
 *      NOT named in the supplied array
 */
const countByName = (arr, people, inverse = false) => {

}

/**
 * 2) Update People Age Format
 * 
 * @param {Array} people people Array
 * 
 * 2.1) Create a copy of the people object and change the ages that are type strings to ints
 */
const updatePeopleAgeFormat = function (people) {

}

/**
 * 3) Insert new items into array from raw data
 * 
 * @param {*} raw string
 * @param {*} people array
 * 
 * 3.1) 
 */
const addNewPeople = function (raw, people) {
    
}

module.exports = { people, raw, countByName, updatePeopleAgeFormat, addNewPeople };