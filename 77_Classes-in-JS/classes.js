function userExample(){}
//remove parenthesis and function keyword and add class keyword

//~ class CreateUser {

// }

// CreateUser will return:
// class CreateUser {
//
// }
// typeof CreateUser is function
// class also contains constructor method and prototype methods
//^ class is not hoisted
//^ you cannot call a class without new keyword
// it would give an error saying, cannot be invoked without 'new'
// new CreateUser() will return an object with the properties defined in the constructor
// output: CreateUser {}

//~ class CreateUser {

// }

// CreateUser.prototype.getBirthYear = function() {
//   return new Date().getFullYear() - this.age
// }

// CreateUser.prototype.getFullName = function() {
//   return this.firstName + ' ' + this.lastName
// }

//^ we can also write the above code in class as below
//^ we can write the prototype methods inside the class

class CreateUser {
  constructor(a, b, c){
    console.log(this)
    console.log(a, b, c)
    // class with print this, as being called using new keyword
  }
  // console.log("hello") // it wont get printer, and will return
  getBirthYear() {
    return new Date().getFullYear() - this.age
    // console.log("hello") // it wont get printer either, and will return
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
  //if we want to log something, we must log inside constructor function and not directly inside class
}
//we can save the methods inside the prototype object like this also


// it will add two properties in prototype object

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)
// this automatically goes to constructor function