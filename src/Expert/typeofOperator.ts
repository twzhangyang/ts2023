const personResponse = {
    "name": "john",
    "email": "john@test.com",
    "firstName": "John",
    "lastName": "Doe",
}

type PersonResponse = typeof personResponse;

const processResponse = (person: PersonResponse) => {
    console.log(person.firstName);
    console.log(person.lastName);
}