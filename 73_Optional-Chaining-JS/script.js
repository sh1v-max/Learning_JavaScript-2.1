//Optional chaining is a new feature in javascript, which 
//allows you to access deeply nested object properties 
//without worrying if the property exists or not. It is a 
//way to simplify the process of accessing nested object 
//properties. It is a way to prevent errors when accessing 
//properties of an object that may not exist.
//& returns undefined if the property does not exist

const user = {
  firstName: 'Wazir',
  lastName: 'Singh',
  age: 24, 
  address: {
    city: 'delhi'
  },
  // getFullName: function(){
  //   return user.firstName + ' ' + user.lastName;
  // }
}

const a = 'city'


//^ if we haven't defined the address property, and trying to log it, will show "undefined"
//^ if we try to access the city property of address, it will throw an error
// console.log(user.address.city); // Uncaught TypeError: Cannot read property 'city' of undefined
//^ preventing such errors
//~ if(user.address){
//   console.log(user.address.city);
// }

//~ console.log(user.address && user.address.city);

//~ console.log(user.address?.city); // this is optional chaining
// it simply means, if user.address exist, then only access the city property(or check for the city
// can also be written as: 
console.log(user.address?.['city']); //output: delhi
console.log(user.address?.[a]); //output: delhi
// console.log(user.getFullName()) //output: Wazir Singh
console.log(user.getFullName?.()) //output: undefined (if function is not present)  
