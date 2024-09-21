let age = 18;
let canVote = (age >= 18) ? 'You can vote.' : 'You cannot vote.';
console.log(canVote);

// debugger
function checkEvenOdd(number) {
    return (number % 2 === 0) ? 'Even' : 'Odd';
}
console.log(checkEvenOdd(10));  // Output: Even
console.log(checkEvenOdd(7));   // Output: Odd

const gender = 'F'
// const gender = 'J'
const message = `${(gender === 'F') ? 'She' : 'He'} is smart.`;
console.log(message) // She is smart.

const message0 = `${(gender.toLocaleLowerCase() === '') ? 'She' : 'He'} is smart.`;
console.log(message0) // He is smart.

const message1 = `${5 ? 'She' : 'He'} is smart.`;
console.log(message1) // She is smart.

const message2 = `${0 ? 'She' : 'He'} is smart.`;
console.log(message2) // He is smart.

const message3 = `${'0' ? 'She' : 'He'} is smart.`;
console.log(message3) // She is smart.

const result = 0 ? 'Wazir' : 'Singh'
console.log(result)     // Singh       falsy value

// debugger
const score = 25;
const grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'F';
console.log(grade);
