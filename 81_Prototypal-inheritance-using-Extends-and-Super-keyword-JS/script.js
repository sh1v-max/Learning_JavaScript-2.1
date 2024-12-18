//~ class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ')
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

// class Student {
//   constructor(firstName, lastName, age, standard) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.standard = standard
//   }
//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ')
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// } 

// class Employee {
//   constructor(firstName, lastName, age, company) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.company = company
//   }
//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ')
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

// const student1 = new Student('Aman', 'Mishra', 32, 10)
// const employee = new Employee('Aman', 'Mishra', 32, 'google')

//^ in the above code we are repeating the same code again and again for the different classes
//^ so we can use extends keyword to inherit the properties of the other class

//================================================================================
class Person {
  live (){
    console.log('person is living')
  }
}
class User extends Person{
  constructor(firstName, lastName, age) {
    super()
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }

  work (){
    console.log('user is working')
  }
}

class Student  extends User{
  //^ adding property is different that usual
  constructor(firstName, lastName, age, standard) {
    //& super keyword is used to call the constructor of the parent class
    super(firstName, lastName, age, standard)
    // super keyword needs to pass the properties of the parent class
    // or it will return undefined value for all
    // we have to pass the properties in constructor and in super keyword as well
  }
  study (){
    console.log('studying...')
  }// can add more methods to the Student class
} // using extends keyword to inherit the properties of the User class

class Employee extends User{
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age)
    this.company = company
  }
  work(){
    console.log('working...')
  }
}

const student1 = new Student('Aman', 'Mishra', 32, 10)
const employee = new Employee('Aman', 'Mishra', 32, 'google')

//^ using constructor require "super" keyword
console.log(employee.work())
// output: working...
// as there are two "work", one in User class and other in Employee class
// it will return the nearest one in the prototype chain, which is in Employee class

//^ what does super keyword does?
// super keyword is used to call the constructor of the parent class

//! the image "prototypeChain" shows how the prototype chain works and formed using "extend" keyword
// to see prototypeChain in action, write "HTMLHeadingElement" and extend all the "prototype"
// and it will end to OBJECT as its final prototype
// as everything in JavaScript s OBJECT


