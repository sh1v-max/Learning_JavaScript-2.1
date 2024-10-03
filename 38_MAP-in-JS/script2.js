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
  // console.log(accumulator, currentValue) 
  // debugger
  return accumulator+currentValue
},1) // 
// console.log(sum)