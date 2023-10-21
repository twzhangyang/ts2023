class Person {
    constructor(public name: string,
                protected age: number) {
    }
}

const adam = new Person("Adam", 20);
console.log(adam.name)