module.exports = [
    {
        name: "Jake",
        lname: "Ford",
        details: {
            age: 24,
            dob: () => {
                let date = new Date();
                return new Date(date.setYear( date.getYear() - 29 ));
            }
        }
    },
    {
        name: "Theo",
        lname: "Ford",
        details: {
            age: '23',
            dob: () => {
                let date = new Date();
                return new Date(date.setYear( date.getYear() - 29 ));
            }
        }
    },
    {
        name: "Neil",
        lname: "Ford",
        details: {
            age: '29',
            dob: () => {
                let date = new Date();
                return new Date(date.setYear( date.getYear() - 29 ));
            }
        }
    }
];