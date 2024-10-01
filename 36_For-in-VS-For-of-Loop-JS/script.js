//        arrays
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // console.log(fruits[i] = i);
}

console.log(`========================`);
// for-in loop
for(fruit of fruits){         //it will iterate through the values of the array
  console.log(fruit);
}

const user = "wazir"
for (const char of user){
  console.log(char);
}

//       objects
const person = {
  firstName: 'wazir',
  lastName: 'singh',
  age: 25,
  city: 'Delhi',
  eyeColor: 'black'
}

// for (const key of person){    //we cant iterate object using for-of loop
//   console.log(key);           //person is not iterable
// }

//objects can be iterate using for-in loop
for (const key in person){    //it will iterate through keys of the object
//  console.log(key);           //will print the keys of the object
  console.log(key +": "+ person[key]);   //will print the values of the object
}

// but above method is less convenient(slow), so we can use Object.keys() method
// Object.keys() method returns an array of a given object's own enumerable property names(keys in short)
// store the obtained key array and apply for-of loop on it
const personKeys = Object.keys(person);
const personVal = Object.values(person); //or you can get the values instead using Object.values() method
const personEntries = Object.entries(person); //or you can get the entries instead using Object.entries() method
// it will return an array of arrays, where each subarray contains a key-value pair of the object
for (const key of personKeys){
  console.log(key +": "+ person[key]);
}