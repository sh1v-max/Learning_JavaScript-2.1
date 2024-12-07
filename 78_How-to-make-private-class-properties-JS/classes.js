class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this._age = age 
    // using underscore was a convention to tell other developers that
    // this property is private and should not be accessed directly
    // but it is not a full proof way to make a property private
    // it doesn't change anything
  }

  getBirthYear() {
    return new Date().getFullYear() - this._age
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
  // we can use this property outside the class also
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)