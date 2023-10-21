type PersonB = {
    name: string,
    email: string,
    age?:string | null
}

const p: PersonB = {
    name: "yang",
    email: "test@test.com"
}

console.log(p.age);