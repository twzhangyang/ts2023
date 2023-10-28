type RequiredX<T> = {
    [P in keyof T]-?: T[P];
}

type PointY = { x?: number, y?: number };

const updatePointY = (p: RequiredX<PointY>) => {
    return {
        ...p
    }
}

// const updatedPointY = updatePointY({ x: 2 });