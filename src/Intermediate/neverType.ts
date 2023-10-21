const throwException = (message: string): never => {
    throw new Error("Never return");
}


type SquareB = {
    size: number,
    kind: 'square'
}

type RectangleB = {
    kind: 'rectangle',
    width: number,
    height: number
}

type ShapeB =
    | SquareB
    | RectangleB

const areaB = (s: ShapeB) => {
    if (s.kind === "square") {
        return s.size * s.size;
    } else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    const _ensureAllCasesAreHandled: never = s;
    return _ensureAllCasesAreHandled;
}

