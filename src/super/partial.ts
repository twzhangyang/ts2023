type PartialX<T> = {
    [P in keyof T]?: T[P];
}

type PointX = { x: number, y: number };

const centerX: PointX = {
    x: 0,
    y: 0
}

const updatePoint = (p: PartialX<PointX>) => {
    return {
        ...centerX,
        ...p
    }
}

const updatedPoint = updatePoint({ x: 2 });