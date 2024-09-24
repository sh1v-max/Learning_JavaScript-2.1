// const username = 'wazir'
// let username2 = username
// username2 = username2 + 'khan'

const fruits =  ['mango', 'apple', 'orange']
const myFruits = fruits

myFruits.push('grapes')
myFruits.push('banana')

const user = {
    firstName: 'Adarsh',
    secondName: 'Singh',    
}

// const user2 = user
// user2.firstName = 'Nikhil'
const  user2 = {}
Object.assign(user2, user)
user2.firstName = 'Nikhil'
console.log(user);
console.log(user2);

const user3 = {...user}
user3.firstName = 'Nik'
console.log(user3);

const arr = ['mango', 'banana', 'apple', 'orange']
const arr2 = []
Object.assign(arr2, arr)
arr2.push('grapes')
console.log('arr:', arr);
console.log('arr2:', arr2);
console.log('arr2.length:', arr2.length);

const arr3 = [...arr]
arr3.push('pineapple')
console.log('arr3:', arr3);

const arr4 = [].concat(arr)
arr4.push('pineapple')
console.log('arr:', arr);
console.log('arr4:', arr4);

const arr5 = arr.slice()
arr5.push('pineapple')
console.log('arr:', arr);
console.log('arr5:', arr5);

