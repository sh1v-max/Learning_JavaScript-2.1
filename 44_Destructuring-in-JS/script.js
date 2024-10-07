// Destructuring in JavaScript
//*array destructuring
const color = ['red', 'green', 'blue', 'yellow', 'pink'];
// const color1= color[1]
// const color2= color[2]
// const color3= color[3]

//using destructuring
//we can give the variable any name in case of array but not in objects
const [color1, color2, color3, o, a ] = color;
//color1=red, color2=green, color3=blue, o=yellow, a=pink
const [,,color4] = color;
//color4=blue
const{3:color5} = color;
//get the color at index 3 and store it into color5
//color5=yellow

//*object destructuring
const user = {
  name: 'John',
  age: 25,
  address:{
    city: 'New York',
    country: 'USA'
  }
}
// const name = user.name;
// const age = user.age;
//output: name=John, age=25
//& variable name should be same as object key
const {names, age} = user;
//output: name=John, age=25 
//or
// const {name:username, age:userAge} = user;
//output: username=John, userAge=25

// const {address} = user;
// const {city} = address; 
// const{address:{city}} = user // multi level destructuring


//* with function
function  intro(userObj){
  console.log(userObj)
}
intro(user);
//output: {name: "John", age: 25, address: {…}}

function intro2({age, name}){
  console.log(age, name);
}
intro2(user);

function printColor(colorsArr){
  console.log(colorsArr);
}
printColor(color);
function printColor2([a, b]){
  console.log([a, b]);
}
printColor2(color);
function printColor3([a, b, d]){
  console.log([a, b, d]);
  console.log(a, b, d);
  //output: ['red', 'green', 'yellow']
  //output: red green yellow
}
printColor3(color);