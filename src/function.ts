function addTest(a: number, b: number): number {
    return a+ b;
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce((previous, current) => {
        return previous + current;
    }, 0);
};



const sumValue = sum(1, 2, 3)
