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
  constructor(firstName, lastName, age){
    // console.log(this) // it will print the object
    // console.log(a, b, c)
    // class with print this, as being called using new keyword
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    // it will create properties with firstName, lastName and age
    // and will store the corresponding values
  }
  //& this is constructor method and is different from constructor function
  //& and it will automatically get run
  // console.log("hello") // it wont get printer, and will return
  getBirthYear() {
    return new Date().getFullYear() - this.age
    // console.log("hello") // it wont get printer either, and will return
    // this will be called when we call getBirthYear method
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
console.log(user1)
console.log(user2)


