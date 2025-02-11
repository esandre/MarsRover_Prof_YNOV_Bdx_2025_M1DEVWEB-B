class Point {
    private readonly _x: number;
    private readonly _y: number;

    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public DistanceWith(other: Point): number{
        const xDelta = Math.abs(this._x - other._x);
        const yDelta = Math.abs(this._y - other._y);
        return xDelta + yDelta;
    }
}

class Program {
    public static ManhattanDistance(a: Point, b: Point): number {
        return a.DistanceWith(b);
    }
}

const p1 = new Point(16, 78);
const p2 = new Point(9, 37);

console.log(Program.ManhattanDistance(p1, p2));