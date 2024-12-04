//^ why need to use constructor function...
// in the previous example, whenever we were creating a new user, we were creating a new object and individual function each time... which consumes our memory
// to prevent that, we will be using constructor function.

//~ function getBirthYear() {
//   return new Date().getFullYear() - this.age
// }

// we're creating a function for only one time and giving its reference whenever is required
// but we can access this function outside of the object, which pollutes global environment
// as, its intended to be used inside object only 

//~ function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
    // getBirthYear: createUser.commonMethods.getBirthYear
//   }
//   return user
// }

//^ same function can be written using this keyword
//~ function createUser(firstName, lastName, age) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
// }
// now we can call the function with new keyword
// new createUser('Aman')
// createUser {firstName: "Aman"}
//! and when we call a function using new keyword, it's constructor function

//we are not returning anything from the function, but we are creating an object of that function
//so we will be using new, it will automatically return, and then this will workd as intended


//~ function sayHi() {
//   console.log('Hello')
// }
// sayHi() // Hello
//sayHi.prototype.constructor() // Hello

//^ with new keyword
//~ function sayHi2() {
//   console.log('Hello')
//   console.log(this)
// }

//~ sayHi2() // Hello and 
// this will return window object
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//~ new sayHi2() // Hello and
// this will return sayHi2 object
// sayHi2 {}
//! so using new keyword, when we call a function, it creates an object of that function and returns it
// it doesn't return anything from the function, but the object of that function


// new sayHi(), will return
// Hello and
// sayHi {}
//  [[Prototype]]: Object

// as we know, createUser function is an object, so we can add properties to it
// createUser.hello = 'hello'
//crateUser.hello will give us 'hello'
// createUser.commonMethods = {} // empty object

// ~ createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   }
// }
// createUser.commonMethods // {getBirthYear: ƒ}

// const user1 = createUser('Aman', 'Mishra', 32)
// const user2 = createUser('Anurag', 'Singh', 72)

// const user1 = new createUser('Aman', 'Mishra', 32)
// const user2 = new createUser('Anurag', 'Singh', 72)
//user1 // createUser {firstName: "Aman", lastName: "Mishra", age: 32}
//user2 // createUser {firstName: "Anurag", lastName: "Singh", age: 72}


function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

CreateUser.prototype.getBirthYear = function() {
  return new Date().getFullYear() - this.age
}

CreateUser.prototype.getFullName = function(){
  return this.firstName + ' ' + this.lastName
}

// const user1 = new createUser('Aman', 'Mishra', 32)
// const user2 = new createUser('Anurag', 'Singh', 72)

//while creating construction function, we capitalize the first letter of the function name
const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)

//& calling constructor function using new keyword, it automatically creates and return(due to new keyword) an object of that function and returns it
//& and then this keyword will point to the object created by the constructor function
//& and we are creating firstName, lastName, age properties on that object, and storing the values

//! what is the issue here?
// we are creating the function(main), and then we are adding its property separately 
// and to solve that, we will learn and use classes