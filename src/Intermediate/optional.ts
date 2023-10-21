type PersonB = {
    name: string,
    email: string,
    age?: string | null,
    address?: string
}

const p: PersonB = {
    name: "yang",
    email: "test@test.com",
    address: "address"
}

console.log(p.age);

const printAddress = (address: string) => {
    console.log(address);
}

printAddress(p.address!)

const printAddressWithAssertion = (person: PersonB) => {
    if(person.address == null) throw new Error("Address is null")
    printAddress(person.address);
}

