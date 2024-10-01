//function declaration
function square(num){
  return num * num;
}

//function expression
const sum = function (a, b){
  return a + b;
}

//arrow function
const square2 = (num) => {
  return num * num;
}
//          OR
const sqrt = (num) => num * num;  //recommended with brackets
// const sqrt = num => num * num;

const diff = (a, b) => a - b;                    //mostly recommended
const random = () => Math.random();
//           OR
const random2 = () => (
  Math.floor(Math.random() * 10) + 1
);

//arrow functions are often used as callbacks in setTimeout(), event handlers

setTimeout(() => {       //anonymous function/arrow function
  console.log('Hello');
}, 1000);

document.addEventListener('click', () => {
  console.log('click');
});