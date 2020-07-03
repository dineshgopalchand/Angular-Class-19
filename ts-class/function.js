function showLog() {
    console.log('this is form my log function');
}
// tslint:disable-next-line:only-arrow-functions
var showLog1 = function () {
    console.log('this is form my log1 function');
};
// const details = { name: 'Angular' };
// // tslint:disable-next-line:only-arrow-functions
// (function(data) {
//     console.log('this is from self invoking function', data);
// })(details);
// showLog1();
// console.log(showLog);
var showLog2 = function () {
    console.log('this is form my log2 function');
};
showLog2();
// const addNumber = (num1: number, num2: number) => {
//     return num1 + num2;
// };
var addNumber = function (num1, num2) { return num1 + num2; };
var result = addNumber(23, 45);
console.log(result);
