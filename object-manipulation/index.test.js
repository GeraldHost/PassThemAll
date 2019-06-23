const { updatePeopleAgeFormat, countByName, people, raw, addNewPeople } = require('./index');
const originalPeople = require('./people');

/**
 * Name Counting
 */
test('The count of people named Jake or Theo is 2', () => {
    expect(countByName(['Jake', 'Theo'], people)).toBe(2);
});

test('Counting people by name is case incesitive', () => {
    expect(countByName(['jake', 'Theo'], people)).toBe(2);
});

test('The inverse count of people named Jake or Theo is 2', () => {
    expect(countByName(['jake', 'Theo'], people, true)).toBe(1);
});

/**
 * Update People Age Format
 */
test('Age properties should be int', () => {
    let newPeople = updatePeopleAgeFormat(people);
    for(let i = 0; i < newPeople.length; i++){
        expect(typeof newPeople[i].details.age).toBe('number');
    }
});

test('The dob function should return an instance of Date', () => {
    let newPeople = updatePeopleAgeFormat(people);
    for(let i = 0; i < newPeople.length; i++){
        expect(newPeople[i].details.dob() instanceof Date).toBe(true);
    }
});

test('Original Object hasn\'t been mutated', () => {
    updatePeopleAgeFormat(people);
    for(let i = 0; i < people.length; i++){
        expect(people[i]).toMatchObject(originalPeople[i]);
    }
});

/**
 * Add new people from raw data
 */
test('People array has 5 more items', () => {
    let newPeople = addNewPeople(raw, people);
    expect(newPeople.length).toBe(7);
});