type SquareA = {
    size: number,
    kind: 'square'
}

type RectangleA = {
    kind: 'rectangle',
    width: number,
    height: number
}

type ShapeA = SquareA | RectangleA;

const areaA = (shape: ShapeA) => {
    if (shape.kind === 'square') {
        console.log(shape.size * shape.size)
    }
    if (shape.kind === 'rectangle') {
        console.log(shape.width * shape.height);
    }
}

type ValidationSuccess = {
    isValid: true,
    validatedValue: string
}

type ValidationFailure = {
    isValid: false,
    errorReason: string
}

type ValidationResult =
    | ValidationSuccess
    | ValidationFailure

const logResult = (result: ValidationResult) => {
    if (result.isValid) {
        console.log('Success, validated value:', result.validatedValue);
    }
    if (result.isValid === false) {
        console.log('Failure, error reason:', result.errorReason);
    }
}
