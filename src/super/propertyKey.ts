const str: string = "hello";
const num: number = 123;
const sym: symbol = Symbol("hello");

const validObj = {
    [str]: "world",
    [num]: 123,
    [sym]: Symbol("hello")
}

const obj = {};

const invalidObj = {
    // [obj]: "world"
}

const key: PropertyKey = "hello";
const validObj2 = {
    [key]: "world"
}