type IsArray<T> =
    T extends Array<infer Member>
        ? 'array'
        : 'other';

type WithArray = IsArray<string[]>;
type WithNotArray = IsArray<string>;

type UnboxArray<T> =
    T extends Array<infer Member>
        ? Member
        : T;

type UnboxedStringArray = UnboxArray<string[]>;
type UnboxedNumberArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<string>

const createPerson = (firstName: string, lastName: string) => {
    return {
        firstName,
        lastName
    }
}

type ReturnTypeA<T> =
    T extends (...args: any[]) => infer R
        ? R
        : never;

const logPerson = (person: ReturnType<typeof createPerson>) => {
    console.log(person.firstName);
}

const logPersonA = (person: ReturnTypeA<typeof createPerson>) => {
    console.log(person.firstName);
}