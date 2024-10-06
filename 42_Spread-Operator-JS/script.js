//spread operator
//used to split up array elements or object properties

//with arrays
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10]; 
const myName = 'Wazir';
const num3 = num1.concat(num2);
console.log(num3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const num4 = [...num1, ...num2];
console.log(num4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num5 = [...num1, ...num2, ...myName];
console.log(num5); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "W", "a", "z", "i", "r"]

//with objects
const user = {
    name: 'Wazir',
    age: 22
}
const user2 = {
    name2: 'Wazir2',
    age2: 222
}
const user3 = {
    name3: 'Wazir3',
    age3: 222,
    address:{
        city: 'Delhi',
        country: 'India'
    }
}

const updatedUser = {...user}
const updatedUser2 = {...user, city: "varanasi"} //add new property
const updatedUser3 = {...user, ...user2}
const updatedUser4 = {...user, ...user3}
// using spread operator we can create a new object with the same properties as the old object
//but it creates shallow copy of object
console.log(updatedUser); // {name: "Wazir", age: 22}
console.log(updatedUser2); // {name: "Wazir", age: 22, city: "varanasi"}
console.log(updatedUser3) // {name: "Wazir2", age: 222, name2: "Wazir2", age2: 222}
console.log(updatedUser4) // {name: "Wazir3", age: 222, name3: "Wazir3", age3: 222, address: {…}}

//with function
function add(){
    console.log(arguments);
}