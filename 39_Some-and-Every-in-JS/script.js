
//*some() method checks if at least one element in the array passes the test 
//implemented by the provided function. It returns a Boolean value.
const evenNumbers = [0, 2, 4, 6, 8, 10];

// Use the some() method to check if there is at least one even number in the array
const hasEvenNumber = evenNumbers.some((num) => {
  console.log(num); // Print each number to the console
  return num % 2 === 0; // Return true if the number is even, false otherwise
});
console.log(hasEvenNumber); // Print the result of the some() method
// output: true

//~ example
const evenNum0 = evenNumbers.some((num) => {
  return num > 7 // Return true if the number is greater than 7, false otherwise
})
console.log(evenNum0) // Print the result of the some() method
// output: true

//~ example 2
const oddNum = evenNumbers.some((num) => {
  return num % 2 !== 0 // Return true if the number is odd, false otherwise
})
console.log(oddNum) // Print the result of the some() method
//output: false

//sample
const result =  evenNumbers.some((num) => {
  return null
})
console.log(result)
//output: false
//it needs to be true for at least one element in the array

//* every() method checks if all elements in the array pass the test 
// implemented by the provided function. It returns a Boolean value.
const oddNumbers = [1, 3, 5, 7, 9, 11];
const result1 = oddNumbers.every((num) => {
  return num % 2 !== 0; // Return true if the number is odd, false otherwise
});
console.log(result1); // Print the result of the every() method
// output: true

const result2 = oddNumbers.every((num) => {
  return num > 5; // Return true if the number is greater than 5, false otherwise
});
console.log(result2); // Print the result of the every() method
// output: false

//it needs to be true for every element in the array