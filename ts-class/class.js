// function getDistance(minPoint: number, maxPoint: number) {
//     return maxPoint - minPoint;
// }
function getDistance(points) {
    return points.maxPoint - points.minPoint;
}
console.log(getDistance({ maxPoint: 35, minPoint: 12 }));
console.log(getDistance({ maxPoint: 45, minPoint: 17 }));
class DrawPoints {
    constructor(points) {
        this.points = points;
    }
    getDistance() {
        return this.points.maxPoint - this.points.minPoint;
    }
    /*
    used getter property to access private/protected properties of a class
    */
    get maxPoint() {
        console.log('from getter');
        return this.points.maxPoint;
    }
    set maxPoint(value) {
        console.log('from setter');
        this.points.maxPoint = value;
    }
}
const obj1 = new DrawPoints({ maxPoint: 35, minPoint: 12 });
console.log(obj1.getDistance());
const obj2 = new DrawPoints({ maxPoint: 45, minPoint: 12 });
console.log(obj2.getDistance());
console.log(obj2.maxPoint); // access getter property
obj2.maxPoint = 65; // access setter property
console.log(obj2.maxPoint); // access getter property
/*
to resolve the issue of setter and getter or use of es6/es6+ code, installed below modules
`npm install @types/webpack`
or this package:
`npm install @types/html-webpack-plugin`

and

`npm install @types/source-map@0.5.2`
*/
