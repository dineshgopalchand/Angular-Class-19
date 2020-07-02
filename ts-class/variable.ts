let numVal = 12;

numVal = 18;
console.log(numVal.toString());

// let variableName;
let variableName: any;

variableName = 'asdf';
variableName = 12;




let rollNumber: number;
rollNumber = 12;
rollNumber = 34;

let nameVal: string;

nameVal = 'Angular';
nameVal = 'typeScript';


let boolVal: boolean;
boolVal = true;
boolVal = false;
// boolVal = 0;

let boolVal1 = true;

// example of type assertion
/*
multi line comment
*/

(variableName as number).toString();
// (variableName as string).toLocaleLowerCase();
// (<number>variableName).toString();


// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }

// let val = {
//     name1: {
//         firstname: 'abc',
//         lastname: 'bcd'
//     }
// };
// if (val.name && val.name.firstname === 'abc') {

// }

let myArr = [1, 2, 3, 3];
let myTupple: (string | number | boolean | number[])[] = [1, 'namddf', true, [1, 3, 33]];
// type myTuppleType = (string | number | boolean | number[]);
// let myTupple: myTuppleType[] = [1, 'namddf', true, [1, 3, 33]];

myArr[0].toString();



