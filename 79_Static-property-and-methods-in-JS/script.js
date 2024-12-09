class CreateUser {
  constructor (firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  hello = 'hello'
  static hi = 'Hii'
  // static property/method is a method that is called on the class itself, not on the object instance

  
  getBirthYear(){
    return new Date().getFullYear() - this.age
  }
  // static getFullName(){
  //   return this.firstName + ' ' + this.lastName
  // }
  getFullName(){
    return this.firstName + ' ' + this.lastName
  }
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 32)