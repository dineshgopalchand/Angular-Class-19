// function getDistance(minPoint: number, maxPoint: number) {
//     return maxPoint - minPoint;
// }
function getDistance(points) {
    return points.maxPoint - points.minPoint;
}
console.log(getDistance({ maxPoint: 35, minPoint: 12 }));
console.log(getDistance({ maxPoint: 45, minPoint: 17 }));
