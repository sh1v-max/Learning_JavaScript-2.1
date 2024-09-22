// let username = "uday";
// username="urvashi";
// console.log(username);

// const namee  = "naman";
// // name='nikhil';
// console.log(namee);

// var variable = 'varun'
// variable= 'vishnu'
// console.log(variable);
let username = 'wazir'

let user = {
  firstName: 'Adarsh',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}
// Object.seal(user) 
// delete user.pata
// user.height = 5

Object.freeze(user)
delete user.pata
user.height = 5 

console.log('firstName' in user)
console.log('height' in user)