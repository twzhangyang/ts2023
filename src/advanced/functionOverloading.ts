function reverse(string: string): string;
function reverse(stringArray: string[]): string[];

function reverse(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray == "string") {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse();
    }
}

const helloB = reverse("hello");
const helloC = reverse(["h", "e", "l", "l", "o"]);

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);