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

class User {
  constructor(firstName, lastName, age) {
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
}

class Student {} 

class Employee {}

const student1 = new Student('Aman', 'Mishra', 32, 10)
const employee = new Employee('Aman', 'Mishra', 32, 'google')
