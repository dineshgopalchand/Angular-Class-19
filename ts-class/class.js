// function getDistance(minPoint: number, maxPoint: number) {
//     return maxPoint - minPoint;
// }
function getDistance(points) {
    return points.maxPoint - points.minPoint;
}
console.log(getDistance({ maxPoint: 35, minPoint: 12 }));
console.log(getDistance({ maxPoint: 45, minPoint: 17 }));
var DrawPoints = /** @class */ (function () {
    function DrawPoints(points) {
        this.points = points;
    }
    DrawPoints.prototype.getDistance = function () {
        return this.points.maxPoint - this.points.minPoint;
    };
    return DrawPoints;
}());
var obj1 = new DrawPoints({ maxPoint: 35, minPoint: 12 });
console.log(obj1.getDistance());
var obj2 = new DrawPoints({ maxPoint: 45, minPoint: 12 });
console.log(obj2.getDistance());
