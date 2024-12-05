class CreateUser {
  constructor(a, b, c){
    this.firstName = a
    this.lastName = b
    this.age = c
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age 
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)