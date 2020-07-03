
// function getDistance(minPoint: number, maxPoint: number) {
//     return maxPoint - minPoint;
// }

// console.log(getDistance(12, 35));
// console.log(getDistance(45, 35));

interface Points {
    minPoint: number;
    maxPoint: number;
}

function getDistance(points: Points) {
    return points.maxPoint - points.minPoint;
}

console.log(getDistance({ maxPoint: 35, minPoint: 12 }));
console.log(getDistance({ maxPoint: 45, minPoint: 17 }));

class DrawPoints {
    constructor(private points: Points) { }
    getDistance() {
        return this.points.maxPoint - this.points.minPoint;
    }
}

const obj1 = new DrawPoints({ maxPoint: 35, minPoint: 12 });
console.log(obj1.getDistance());
const obj2 = new DrawPoints({ maxPoint: 45, minPoint: 12 });
console.log(obj2.getDistance());
