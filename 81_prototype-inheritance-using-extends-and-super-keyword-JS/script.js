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

class Employee {}

const student1 = new Student('Aman', 'Mishra', 32, 10)
const employee = new Employee('Aman', 'Mishra', 32, 'google')
