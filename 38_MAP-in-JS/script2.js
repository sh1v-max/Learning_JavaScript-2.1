console.log(`==========reduce() method==========`)
const num = [1, 1, 1, 1, 1, 1, 1]
const result =  num.filter((n) => {
  return n > 1;
})
// console.log(result);

const nums = [1, 1, 2, 1, 1, 1]
const reduced = nums.reduce((accumulator, currentValue, index, array) => {
  console.log(accumulator);
  return accumulator + currentValue;
})

//reduce() can have 4 arguments: accumulator, currentValue, index, array
//accumulator is the value that is returned by the function
//currentValue is the value of the current element
//index is the index of the current element
//array is the array itself