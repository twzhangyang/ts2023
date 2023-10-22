type Name = { firstName: string, lastName: string };
const addFullName = <T extends Name>(obj: T): T & { fullName: string } => {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    }
}

const nameA = addFullName({ firstName: "John", lastName: "Doe" });