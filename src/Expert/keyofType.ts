const logGet = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
    console.log(obj[key]);
}

const logSet = <Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) => {
    obj[key] = value;
}

type LogPerson = {
    firstName: string,
    lastName: string,
    email: string
}

type LogPersonKeys = keyof LogPerson;
const personA: LogPerson = {
    firstName: "John",
    lastName: "Doe",
    email: "test@test.com"
}
logSet<LogPerson, LogPersonKeys>(personA, "firstName", "Jane");