function add(a, b){
  console.log(arguments);
  //arguments is an array-like object that 
  //but its not an array. it has length property but not array methods like map, filter, reduce etc.
  //contains all the arguments passed to the function. check output
  return a + b;
}
add(4, 5, 6, 7, 8, 9);
/*output:
Arguments(6) [4, 5, 6, 7, 8, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0: 4
1: 5
2: 6
3: 7
4: 8
5: 9
callee: ƒ add(a, b)
length: 6
Symbol(Symbol.iterator): ƒ values()
[[Prototype]]: Object
 */

function sub(a,b){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments[4]);
  return a - b;
}
sub(10, 5, 6, 7, 8, 9);
// as arguments hold all the arguments passed to the function, we can access them using index as shown above.
// output:
/* 
10
5
6
7
8
*/
 
console.log(`=====some other properties======`)
 //function declaration
function sum(){
 let sum = 0
 for(let i = 0; i < arguments.length; i++){
   sum += arguments[i];
  }
  return sum
} 
//arguments works with function declaration and function expression

//function expression
const sum2= function(){
 let sum = 0
 for(let i = 0; i < arguments.length; i++){
   sum += arguments[i];
  }
  return sum
}
console.log(sum(1,2,3,4,5)); //15

//&but wont work with arrow function
const sum3=( )=> {
  let sum = 0
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
   }
   return sum
 }
console.log(sum(1,2,3,4,5)); // error: arguments is not defined
//*rest parameter can be used instead of arguments in arrow function

//&converting arguments to array
//method 1: using Array.from
function argument(){
  console.log(arguments); // Arguments(5) [1, 2, 3, 4, 5] not an actual array
  const args = Array.from(arguments);// converting arguments to array using Array.from
  return args; // [1, 2, 3, 4, 5] a return value
}
const arrayFromArg = argument(1,2,3,4,5); // Arguments(5) [1, 2, 3, 4, 5]
console.log(arrayFromArg); // [1, 2, 3, 4, 5]

//method 2: using spread operator
function argument2(){
  const args = [...arguments]; // converting arguments to array using spread operator 
  return args; // [1, 2, 3, 4, 5] a return value
}
const arrayFromArg2 = argument2(1,2,3,4,5); // Arguments(5) [1, 2, 3, 4, 5]
console.log(arrayFromArg2); // [1, 2, 3, 4, 5]