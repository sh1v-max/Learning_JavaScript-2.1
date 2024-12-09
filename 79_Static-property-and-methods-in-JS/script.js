class CreateUser {
  constructor (firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  hello = 'hello'
  static hi = 'Hii'
  // static property/method is a method that is called on the class itself, not on the object instance

  static {
    const z = 10
    const str = 'hello'
    console.log('I am static block')
  }
  // this is static block
  // it will be executed only once when the class is loaded
  // it can not be called from object instance or outside object
  
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

//~ CreateUser.myName = 'hello world'
// will be added inside the class as a property
// console.dir(CreateUser)
// output:
  // hi: "Hii"
  // myName: "hello world"
  // length: 3
  // name: "CreateUser"
  // prototype: {getBirthYear: ƒ, getFullName: ƒ}
  // arguments: (...)
  // caller: (...)
  // [[FunctionLocation]]: script.js:2
  // [[Prototype]]: ƒ ()
  // [[Scopes]]: Scopes[2]
//^ you can not access static property/method on user1, and user2... they are defined for class
//! will be accessible by only class and not the object

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 32)
