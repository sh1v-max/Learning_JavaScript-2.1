//        arrays
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // console.log(fruits[i] = i);
}

console.log(`========================`);
// for-in loop
for(fruit of fruits){
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