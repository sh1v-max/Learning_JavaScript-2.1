// object oriented programming is a programming paradigm based 
// on the concept of objects which can contain data in the form of 
// fields and code in the form of procedures. An object can be 
// defined as a data field that has unique attributes and behavior. 
// The object-oriented programming is a way to solve the problem by 
// creating objects.

const user = {
  firstName: 'Anurag',
  lastName: 'Singh',
  age: 25,
  getAgeYear: function() {
    return new Date().getFullYear() - age
  }
}

