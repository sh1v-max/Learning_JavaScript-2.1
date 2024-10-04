const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']

// for(const fruit of fruits){
//     console.log(fruit);
// }

//its a method and it takes a function(callback) as an argument
fruits.forEach(function () {
  // console.log('I am a fruit')
  // it iterate and print 'I am a fruit' 5 times(number of elements in the array)
})

//with regular function
fruits.forEach(function (fruit) {
  console.log(fruit)
})

//with arrow function
//and its a great example of a higher order function
fruits.forEach((fruit) => {
  // .forEach() is a higher order function
  console.log(fruit) // arrow function(anonymous) is a callback function
})

//can also use multiple arguments in the callback function
const months = ['January', 'February', 'March', 'April', 'May']
months.forEach((month, index) => {
  console.log(index, month);
  return month;
});
/*output:
    0 'January'
    1 'February'
    2 'March'
    3 'April'
    4 'May'
*/

/*
fruits.forEach(abc)
function abc(el){
  console.log(el)
}
        
OR

fruits.forEach(function abc(el){                 //named function
  console.log(el)
})
*/

/*
return type of forEach is undefined

fruits.forEach((fruit) => {
  console.log(fruit)
  return fruit
})
  output:
      Apple
      Banana
      Orange
      Mango
      Pineapple
      undefined

? quick peak of MAP method 
using map wont change the original array
it also returns an array
fruits.map((fruit) => {
  console.log(fruit)
  return fruit
})
  output:
  Apple
  Banana
  Orange
  Mango
  Pineapple
(5) ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']
*/
