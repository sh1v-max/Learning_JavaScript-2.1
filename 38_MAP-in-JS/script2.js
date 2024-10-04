console.log(`==========reduce() method==========`)
const num = [1, 1, 1, 1, 1, 1, 1]
const result =  num.filter((n) => {
  return n > 1;
})
// console.log(result);

const exArr = [1, 1, 2, 1, 1, 1]
const exReduced = exArr.reduce((accumulator, currentValue, index, array) => {
  //function logic
}, /*initialValue*/)

//reduce() can have 4 arguments: accumulator, currentValue, index, array
//accumulator is the value that is returned by the function
//currentValue is the value of the current element
//index(optional) is the index of the current element
//array(optional) is the array itself
//initialValue is the value that is used as the first argument in the first iteration

const nums = [1, 2, 3, 4]
const sum = nums.reduce((accumulator, currentValue, index, array) => {
  // console.log(index, currentValue) 
  console.log(accumulator, currentValue)  // 1 2 3 4
  // debugger //
  return accumulator+currentValue // 1+2+3+4
},0) // 
 console.log(sum)


const usersCamp = [
  {firstName: 'John', lastName: 'Doe', age: 30},
  {firstName: 'akshay', lastName: 'singh', age: 22},
  {firstName: 'wazir', lastName: 'roy', age: 28},
  {firstName: 'ritik', lastName: 'ob', age: 34},
]
const user30 = usersCamp.reduce((acc ,curr) => {
  if(curr.age < 30){ //if the age is less than 30
    acc = acc.concat(curr.firstName) //concatenate the first name
  }
  return acc
}, {})

console.log(user30)
// const user30 = usersCamp.filter((user) => {
//   return user.age < 30
// })
// console.log(user30)
// const user30Name = user30.map((user) => {
//   return user.firstName
// })
// console.log(user30Name)
