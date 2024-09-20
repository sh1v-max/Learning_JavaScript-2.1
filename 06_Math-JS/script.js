const E = Math.E
const LN10 = Math.LN10
const LN2 = Math.LN2
const LOG10E = Math.LOG10E
const LOG2E = Math.LOG2E
const PI = Math.PI
const SQRT1_2 = Math.SQRT1_2
const SQRT2 = Math.SQRT2

console.log(E);                 // 2.718281828459045
console.log(LN10);              // 2.302585092994046
console.log(LN2);               // 0.6931471805599453
console.log(LOG10E);            // 0.4342944819032518
console.log(LOG2E);             // 1.4426950408889634
console.log(PI);                // 3.141592653589793
console.log(SQRT1_2);           // 0.7071067811865476
console.log(SQRT2);             // 1.4142135623730951

console.log(Math.floor(4.7));            // 4
console.log(Math.floor(2.4));            // 2
console.log(Math.floor(4.99));           // 4
console.log(Math.floor(4.9999999999999999)); // 4
console.log(Math.floor(-4.7));           // -5
console.log(Math.floor(-2.1));           // -3

console.log(Math.ceil(4.7));             // 5
console.log(Math.ceil(2.4));             // 3
console.log(Math.ceil(4.99));            // 5
console.log(Math.ceil(4.9999999999999999)); // 5
console.log(Math.ceil(-4.7));            // -4
console.log(Math.ceil(-2.1));            // -2

console.log(Math.round(4.7));            // 5
console.log(Math.round(2.4));            // 2
console.log(Math.round(4.99));           // 5
console.log(Math.round(4.9999999999999999)); // 5
console.log(Math.round(-4.7));           // -5
console.log(Math.round(-2.1));           // -2

console.log(Math.abs(-4.7));            // 4.7
console.log(Math.abs(4.7));             // 4.7
console.log(Math.abs(-2.1));            // 2.1
console.log(Math.abs(2.1));             // 2.1
console.log(Math.abs(-4.99));           // 4.99
console.log(Math.abs(4.9999999999999999)); // 4.999999999999999

console.log(Math.trunc(-4.7));           // -4
console.log(Math.trunc(4.7));            // 4
console.log(Math.trunc(-2.1));           // -2
console.log(Math.trunc(2.1));            // 2
console.log(Math.trunc(-4.99));          // -4
console.log(Math.trunc(4.9999999999999999)); // 4

console.log(Math.random());               // 0.2216349417076152
console.log(Math.random()*20);            // 4.43706983014523
console.log(Math.random()*4);             // 0.4934871950625515
console.log(Math.floor(Math.random()*4)); // 3


//Taking input from user using propmt() method
const width = +prompt("Please Enter Rectangle Width");
const height = +prompt("Please Enter Rectangle Height");

console.log(width * height);
document.write(`Rectangle Area: ${width * height}`);