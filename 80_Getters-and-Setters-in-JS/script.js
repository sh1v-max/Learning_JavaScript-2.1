class CreateUser {
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
  } // ^ getter
  // "get FullName" will be present in prototype and
  // FullName will be created as a property
  set fullName(value){
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  } //^ setter
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)

