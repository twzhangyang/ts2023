const padLeft = (value: string, padding: number | string) => {
    if (typeof padding === 'number') {
        return Array(padding + 1).join('') + value;
    }
    if(typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`Expected number or string, but got ${padding}`)
}


class Cat {
    meow() {
        console.log('meow')
    }
}

class Dog {
    bark() {
        console.log('woof')
    }
}

type AnimalA = Cat | Dog;

const speak = (animal: AnimalA) => {
    // cannot use typeof, since typeof animal is 'object'
    if (animal instanceof Cat) {
       animal.meow()
    }

    if (animal instanceof Dog) {
        animal.bark();
    }
}


type Square = {
    size: number
}

type Rectangle = {
    width: number,
    height: number
}

type Shape = Square | Rectangle;

const area = (shape: Shape) => {
    if ('size' in shape) {
        return shape.size * shape.size;
    }
    if('width' in shape) {
        return shape.width * shape.height;
    }
}

console.log(area({size: 2}))
console.log(area({width: 2, height: 2}))
