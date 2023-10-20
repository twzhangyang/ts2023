type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

const point2D: Point2D = {x: 0, y: 10};
const point3D: Point3D = {x: 0, y: 10, z: 20};

const takesPoint2D = (point: Point2D) => {}
takesPoint2D(point3D)