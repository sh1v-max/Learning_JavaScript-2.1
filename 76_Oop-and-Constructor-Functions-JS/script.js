//^ why need to use constructor function...
// in the previous example, whenever we were creating a new user, we were creating a new object and individual function each time... which consumes our memory
// to prevent that, we will be using constructor function.

//~ function getBirthYear() {
//   return new Date().getFullYear() - this.age
// }

// we're creating a function for only one time and giving its reference whenever is required
// but we can access this function outside of the object, which pollutes global environment
// as, its intended to be used inside object only 

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear: createUser.commonMethods.getBirthYear
  }
  return user
}

// as we know, createUser function is an object, so we can add properties to it
// createUser.hello = 'hello'
//crateUser.hello will give us 'hello'
// createUser.commonMethods = {} // empty object

createUser.commonMethods = {
  getBirthYear() {
    return new Date().getFullYear() - this.age
  }
}
// createUser.commonMethods // {getBirthYear: ƒ}

const user1 = createUser('Aman', 'Mishra', 32)
const user2 = createUser('Anurag', 'Singh', 72)

const arr1 = [1,2]
const arr2 = [3, 4]