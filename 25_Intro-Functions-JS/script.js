/*
// console.log("Introducing Functions");
// console.log("hey,  i am Shiv");
// console.log("i am a web developer");

// function definition
function introduceMe(username = 'wazir') {
  //     if(username === undefined){
  //         username = 'Wazir'
  //     }
  //   // console.log(username)
  console.log(`Introducing Functions`)
  console.log(`this is ${username}`)
  //   console.log(`this is ${username || wazir}`)
  console.log(`${username} is a web developer`)
}

// function calling
// const returnValue = introduceMe()

introduceMe('advit')
introduceMe('kunal')
introduceMe()

console.log(`==================================`);

function person(name, profession, age) {
  console.log(`this is ${name}`)
  console.log(`${name} is ${age} year old and he is a ${profession}`)
}

// person('kunal', 'developer', 24)
// person('advit', 'swimmer', 25)
// person('ritik', 'gamer', 23)
*/

function addTwoNumbers(num1, num2){
  // console.log('hello')
  // console.log(2+2)

  // add = num1+num2
  // return add
  
  return num1+num2
}
const sum = addTwoNumbers(77, 975)
console.log(sum)


// debugger
function subTwoNumbers(num1, num2){
  diff = num1-num2
  return diff
}

// const sub = subTwoNumbers(77, 975)  
const sub = subTwoNumbers(subTwoNumbers(1000,10), subTwoNumbers(200,100))  
console.log(sub);
