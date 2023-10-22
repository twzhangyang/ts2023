const reverseSorted = (input: readonly number[]): number[] => {
    return input.slice().sort().reverse();
}

const start = [1, 2, 3];
const reverseSortedResult = reverseSorted(start);

type Neat = readonly number[];
type Long = ReadonlyArray<number>;


type PointC = readonly [number, number];
const move = (point: PointC, x: number, y: number): PointC => {
    return [point[0] + x, point[1] + y];
}

const pointC: PointC = [3, 4];
const movedPoint = move(pointC, 1, 1);


