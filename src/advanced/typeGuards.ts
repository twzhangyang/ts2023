type SquareC = {
    size: number
}

type RectangleC = {
    width: number,
    height: number
}

type ShapeC = SquareC | RectangleC;

const isSquare = (shape: ShapeC): shape is SquareC => {
    return 'size' in shape;
}

const isRectangle = (shape: ShapeC): shape is RectangleC => {
    return 'width' in shape;
}

const areaC = (shape: ShapeC) => {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.width;
    }

    const _ensure: never = shape;
    return _ensure;
}