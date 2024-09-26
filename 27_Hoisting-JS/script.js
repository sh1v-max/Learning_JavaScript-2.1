debugger

console.log(a);
let a = "wazir";

console.log(x);
var x = 5;

greet();

function greet() {
  console.log("Hello, World!");
}

greet2();  // TypeError: greet is not a function

var greet2 = function() {
  console.log("Hi!");
};