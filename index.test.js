const { updatePeopleAgeFormat, countByName, people } = require('./index');

/**
 * Name Counting
 */
test('Counting by name', () => {
    expect(countByName(['Jake', 'Theo'], people)).toBe(2);
});

test('Counting by name (case incesitive)', () => {
    expect(countByName(['jake', 'Theo'], people)).toBe(2);
});

test('Counting by name shouldn\'t mutate the original object', () => {
    let originalPeople = people;
    countByName(['jake', 'theo'], people);
    people.forEach((person, idx) => {
        expect(person).toMatchObject(originalPeople[idx]);
    });
});

/**
 * Update People Age Format
 */
test('Age properties have been changed from string to int', () => {
    let newPeople = updatePeopleAgeFormat(people);
    newPeople.forEach(person => {
        expect(typeof person.details.age).toBe('number');
    });
});

test('Ages have only changed type and not value', () => {
    let newPeople = updatePeopleAgeFormat(people);
    newPeople.forEach((person, idx) => {
        expect(person.details.age).toBe(parseInt(people[idx].details.age));
    });
});

test('Ages have only changed type and not value', () => {
    let newPeople = updatePeopleAgeFormat(people);
    newPeople.forEach((person, idx) => {
        expect(person.details.dob instanceof Date).toBe(true);
    });
});

test('Original Object hasn\'t been mutated', () => {
    let originalPeople = people;
    updatePeopleAgeFormat(people);
    people.forEach((person, idx) => {
        expect(person).toMatchObject(originalPeople[idx]);
    });
});