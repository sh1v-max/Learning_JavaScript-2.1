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
  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}


// it will add two properties in prototype object

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)
