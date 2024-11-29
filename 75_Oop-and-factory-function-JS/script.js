// object oriented programming is a programming paradigm based 
// on the concept of objects which can contain data in the form of 
// fields and code in the form of procedures. An object can be 
// defined as a data field that has unique attributes and behavior. 
// The object-oriented programming is a way to solve the problem by 
// creating objects.

const user1 = {
  firstName: 'Anurag',
  lastName: 'Singh',
  age: 25,
  getAgeYear: function() {
    return new Date().getFullYear() - user1.age
  }
}

const user2 = {
  firstName: 'Anu',
  age: 25,
  getAgeYear: function() {
    return new Date().getFullYear() - user2.age
  }
}

// user1.getAgeYear() === user2.getAgeYear()
// output: true
// user1.getAgeYear === user2.getAgeYear
// output: false 
// because both are different functions
// that mean, the number of time we are creating different object
// we are creating different function for each object, hence occupying more space

