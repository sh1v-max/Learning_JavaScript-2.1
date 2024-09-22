const myName = 'Wazir'

const userName1 = ''
const userName2 = ''

const user1 = {
  'firstname': 'wazir',
  'lastName': 'singh',
}

// const user2 = {
//   firstname: 'akash',
//   lastName: 'singh',
//   Wazir:'Developer'
// }

// console.log(user1);                          // {firstname: "wazir", lastName: "singh"}
// console.log(user1.firstname);                 // wazir
// console.log(user1.age);                       // undefined
// console.log(user2['lastName']);                // singh
// console.log(user2[myName]);                    // Developer
// console.log(user2["first" + "name"]);          // akash


const user2 = {
  firstname: 'akash',
  lastName: 'singh',
  address: {
      city: 'varanasi',
      state:'UP',
      moreDetails: {
          country:'india',
          pinCode:123456
      }
  }
}
user2.age = 24
user2['city'] = 'delhi'

console.log(user2);
console.log(user2.firstname);
console.log(user2.age);

