class CreateUser {
  #age // this is a private property
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    //^ this._age = age 
    // using underscore was a convention to tell other developers that
    // this property is private and should not be accessed directly
    // but it is not a full proof way to make a property private
    // it doesn't change anything
    this.#age = age
    //^ this is a new way to make a property private
    // by using # before the property name
    // but we need to declare #age outside the constructor
    // to make it private or else, it will give an error
  }

  #hi = 'Hello World'
  
  getBirthYear() {
    console.log(this.#hi)
    // this.#getFullName() // but we can use it here, in the class
    console.log(this.#getFullName())
    return new Date().getFullYear() - this.#age
    // can access #age inside the class
  }
  #getFullName() { // now it's a private property
    return this.firstName + ' ' + this.lastName
  }
  // we can use this property outside the class also
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)
//user1.#age: 32

// console.log(user1.#age) 
// this will give an error
// private field #age must be declared in an enclosing class
// ie, we can only use #age inside the class

// console.log(user1.#getFullYear())
// Private field '#getFullYear' must be declared in an enclosing class


// ====================================================================================================

const a = {
  name: 'Aman',
  // #age: 32
  // we can not create private property like this, just simply using #
  // it will show unexpected identifier error
  '#age': 32
  // but we can create private property like this
}
// console.log(#a)
// Private field '#a' must be declared in an enclosing class
//^ but it's not truly a private property, it just looks like private property
console.log(a['#age'])
// 32
// we can access it like this