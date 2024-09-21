const username = 'wazir'
const userAge = 22
// const username = prompt('Enter your name') || 'wazir'
// const userAge = parseInt(prompt('Enter your Age')) || 22

console.log(`Name: ${username}`)
console.log(`Age: ${userAge}`)
// if(true) console.log("Usr is working professional");
// if(false) console.log("Usr is working professional");

// if(username) {
//   console.log(`Name: ${username}`)
// }

// if(userAge) {
//   console.log(`Age: ${userAge}`)
// }

// debugger;
if (12) {
  console.log('Hello')
}

if (userAge > 0 && userAge <= 4) {
  console.log(`${username} is Kid`)
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${username} is school student`)
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${username} is college student`)
  if (userAge >= 20) {
    console.log(`${username} is above 20`)
  } else {
    console.log(`${username} is below 20`)
  }
} else if (userAge >= 25 && userAge <= 35) {
  console.log(`${username} is working professional`)
} else if (userAge >= 36 && userAge <= 50) {
  console.log(`${username} is senior professional`)
} else if (userAge >= 51 && userAge <= 120) {
  console.log(`${username} is retired professional`)
} else if (userAge >= 121) {
  console.log(`${username} is immortal`)
} else {
  console.log(`Enter a valid age`)
}

console.log('end')
 