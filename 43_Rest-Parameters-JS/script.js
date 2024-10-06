//rest parameters are used to pass a variable number of arguments to a function
//rest parameters are indicated by three dots (...)

const nums1 = [1, 2, 3, 4, 5];
/*
function add(){
  console.log(`nums: `arguments);
  let sum  = 0
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 2, 3, 4, 5));
output:
  nums: Arguments(5) [1, 2, 3, 4, 5 callee: ƒ, Symbol(Symbol.iterator): ƒ]
  15
*/

//same with rest parameter
function add(...num){ //rest parameter
  console.log(`nums: `, num);
  let sum  = 0
  for(let i = 0; i < num.length; i++){
    sum += num[i];
  }
  return sum;
}
console.log(add(...nums1)); //spread operator
//output:
// nums: [1, 2, 3, 4, 5]
// 15

function rest(a, b, c, ...nums){ //*rest parameter   should be the last parameter
  console.log(`a, b, c: `, a, b, c);
  console.log(`nums: `, nums);
}
const result = rest(...nums1);
const result1 = rest(...nums1, 6, 7, 8);
console.log(result)
//output:
// a, b:  1 2 3
// nums:  (2) [ 4, 5]
console.log(result1)
//output:
// a, b:  1 2 3
// nums:  (5) [4, 5, 6, 7, 8]
// //& if no argument is passed, rest parameter will be an empty array

//* example using different ways to pass arguments
// function addReduce1(){
//   return [...arguments].reduce((acc, curr) => acc + curr);
// }
// console.log(addReduce1(...nums1))  //15

// function addReduce2(){
//   return Array.from(arguments).reduce((acc, curr) => acc + curr);
// }
// console.log(addReduce2(...nums1))  //15

function addReduce(...nums){
  return nums.reduce((acc, curr) => acc + curr); //most used
}
console.log(addReduce(...nums1))   //15

//rest parameter and spread operator are different and used in different contexts