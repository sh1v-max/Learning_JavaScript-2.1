//^ why need to use constructor function...
// in the previous example, whenever we were creating a new user, we were creating a new object and individual function each time... which consumes our memory
// to prevent that, we will be using constructor function.

function getBirthYear() {
  return new Date().getFullYear() - this.age
}
// we're creating a function for only one time and giving its reference whenever is required

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear () {
      return new Date().getFullYear() - user.age
    },
  }
  return user
}

const user1 = createUser('Aman', 'Mishra', 32)
const user2 = createUser('Anurag', 'Singh', 72)

const arr1 = [1,2]
const arr2 = [3, 4]

