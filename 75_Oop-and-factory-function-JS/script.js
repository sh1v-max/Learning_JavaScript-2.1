// object oriented programming is a programming paradigm based
// on the concept of objects which can contain data in the form of
// fields and code in the form of procedures. An object can be
// defined as a data field that has unique attributes and behavior.
// The object-oriented programming is a way to solve the problem by
// creating objects.

//& const user1 = {
//   firstName: 'Anurag',
//   lastName: 'Singh',
//   age: 25,
  //~ getBirthYear: function () {
  //   return new Date().getFullYear() - user1.age
  // },
//   getBirthYear () { // shorthand
//     return new Date().getFullYear() - user1.age
//   },
// }

//~ const user2 = {
//   firstName: 'Anu',
//   age: 25,
//   getBirthYear: function() {
//     return new Date().getFullYear() - user2.age
//   }
// }

// user1.getBirthYear() === user2.getBirthYear()
// output: true
// user1.getBirthYear === user2.getBirthYear
// output: false
// because both are different functions
// that mean, the number of time we are creating different object
// we are creating different function for each object, hence occupying more space

//~ function createUser(firstName, lastName, age) {
//   const user = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,}

//   return user
// }
//^ if property and the value are same, we can use the shorthand
//^ like this: 

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear () { // shorthand
      return new Date().getFullYear() - user1.age
    },
  }
  return user
}

const user1 = createUser('Anurag', 'Singh', 25)
const user2 = createUser('Wazir', 'Singh', 23)
// user1.getBirthYear === user2.getBirthYear
// output: false 
// both function are same but being stored differently in the memory, its returning false
//! to solve this, we use constructor function

arr1 = [1,2]
arr2 = [3,4]
// arr1.pop === arr2.pop
// output: true