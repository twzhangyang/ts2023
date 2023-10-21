type PersonC = {
    name: string
    dateOfBirth?: Date
}

const assert = (condition: unknown, message: string) : asserts condition => {
    if (!condition) throw new Error(message);
}

const getPerson = (): PersonC | null => {
    return null;
}

const maybePerson = getPerson();

// assert(maybePerson != null, "Could not load person")
// console.log("Name", maybePerson.name)
//

const assertDate = (value: unknown): asserts value is Date => {
    if (value instanceof Date) return;
    else throw new TypeError("Value is not a Date")
}
// assertDate(maybePerson!.dateOfBirth);
// console.log('Date of Birth', maybePerson!.dateOfBirth.toISOString());
