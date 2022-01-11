// 1. Shorten Console log

// const log = console.log.bind(document);
// log("does it work?");

// 2. Merge two arrays into one

const array1 = ["One", "Two", "Three"];
const array2 = ["Four", "Five", "Six"];
const merged = array1.concat(array2);
console.log("2. Merged Array", merged);

// If 2 array have some same child value, 
// it still combined with the same value exist multiplied.

// 3. Merge two objects into one

const user = {
    name: 'Paul Knulst',
    gender: 'Male',
};
const article = {
    title: 'Javascript tips',
    date: '2021 - 11 - 19',
};
const summary = {...user, ...article};
console.log("3. Merged Object", summary);

// 4. Shorten Array
// Set Array length to shorter number than the actual length

const big_array = ["One", "Two", "Three", "Four", "Five", "Six"];
big_array.length = 3;
console.log("4. Shorten Array", big_array);

// 5. Shuffle an array

const array = ["One", "Two", "Three", "Four", "Five", "Six"];
array.sort(function(){return Math.random() - 0.5});
console.log("5. Shuffle Array", array);

// 6. Make function isNum to verify a number

const isNum = (n) => {
    return !isNaN(parseFloat(n) && isFinite(n))
}

console.log("6. Verify Number", isNum(1337));
console.log(isNum("Javascript"));

// 7. Use isStr to verify a string

const isStr = value => typeof value === 'string';

console.log("7. Verify String", isStr('Javascript'));
console.log(isStr(345));

// 8. Use isNull

const isNull = value => value === null || value === undefined;

console.log("8. Verify Null", isNull(null));
console.log(isNull());
console.log(isNull(123));

// 9. Calculate the Permorfance of a function

// const start = performance.now();
// for(let i = 1; i < 10; i++){
//     console.log("Performance Test");
// }
// const end = performance.now();
// const total = start - end;
// console.log("9. Function Performance :", total);

// 10. Remove Duplicates from an array

const delDuplicates = array => [...new Set(array)];
console.log("10. Remove Duplicates", delDuplicates(["One", "Two", "Three", "Two"]));

// 11. Use Logical AND/OR for conditions

const input = 2
input === 5 && console.log("it is 5");
input === 5 || console.log("it is not 5");

// or for assigning values

const defaultsTo5 = (arg) => {
    atg = arg || 5;
    console.log(arg);
}

let arg1 = 2;
let arg2 = null;
defaultsTo5(arg1) //2
defaultsTo5(arg2) //5

// 12. Ternary Operator

// Redice a lot of if else

const temperature = (temp) => {
    return (temp > 39 || temp < 35.5) ? 'Visit Doctor'
    : (temp < 37.5 && temp > 36.5) ? 'Go Out and Play'
    : (temp <= 39 && temp >= 35.5) ? 'Take some rest' : ''
}

console.log("12. Ternary Operator", temperature(38));
console.log(temperature(36));

// Source: https://javascript.plainenglish.io/12-important-javascript-functions-every-web-developer-should-know-e488c4bbf521