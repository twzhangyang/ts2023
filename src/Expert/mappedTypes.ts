type PointD = { x: number, y: number };

const centerD1: PointD = {
    x: 0,
    y: 0
};

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

const centerD2: ReadOnly<PointD> = {
    x: 0,
    y: 0
};


centerD1.x = 2;
// centerD2.x = 2;

