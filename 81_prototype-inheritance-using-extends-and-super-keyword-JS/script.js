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

// const user1 = new User('Aman', 'Mishra', 32)
// const user2 = new User('Anurag', 'Singh', 72)

class Student {
  constructor(firstName, lastName, age, standard) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.standard = standard
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

class Employee {
  constructor(firstName, lastName, age, company) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.company = company
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

const student1 = new Student('Aman', 'Mishra', 32, 10)
const student2 = new Student('Aman', 'Mishra', 32, 'BCA')
const user2 = new User('Anurag', 'Singh', 72)