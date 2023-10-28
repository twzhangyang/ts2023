type ReadonlyX<T> = {
    readonly [P in keyof T]: T[P];
}

type PointE = { x: number, y: number };
const p1: PointE = {
    x: 0,
    y: 0
}

p1.x = 2;

const p2: ReadonlyX<PointE> = {
    x: 0,
    y: 0
}

// p2.x = 2;

const toReadonly = <T>(obj: T): ReadonlyX<T> => {
    return obj;
}

const p3 = toReadonly(p1);
// p3.x =2;