const dayNumber = 3
const username = 'Wazir'
const userAge = 22
const grade = 'C'

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

console.log('Hello');
console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);
console.log(`Grade: ${grade}`);

switch (dayNumber) {
  case 0:
    console.log('It is Sunday Today')
    break
  case 1:
    console.log('It is Monday Today')
    break
  case 2:
    console.log('It is Tuesday Today')
    break
  case 3:
    console.log('It is Wednesday Today')
    break
  case 4:
    console.log('It is Thursday Today')
    break
  case 5:
    console.log('It is Friday Today')
    break
  case 6:
    console.log('It is Saturday Today')
    break
  default:
    console.log('Please Enter a Valid Day Number')
}

switch (true) {
  case userAge >= 0 && userAge <= 4:
    console.log(`${username} is a kid`)
    break
  case userAge >= 5 && userAge <= 17:
    console.log(`${username} is a school student`)
    break
  case userAge >= 18 && userAge <= 24:
    console.log(`${username} is a college student`)
    break
  case userAge >= 25 && userAge <= 40:
    console.log(`${username} is a adult professional`)
    break
  case userAge >= 40 && userAge <= 60:
    console.log(`${username} is a senior  professional`)
    break
  case userAge >= 60 && userAge <= 100:
    console.log(`${username} is a retired professional`)
    break
  default:
    console.log(`enter a valid age`)
}

switch(grade){
    case 'A':
        console.log('Your score is between 85% and 100%');
    break
    case 'B':
        console.log('Your score is between 70% and 85%');
    break
    case 'C':
        console.log('Your score is between 60% and 70%');
    break
    case 'D':
        console.log('Your score is between 50% and 60%');
    break
    case 'E':
        console.log('Your score is between 35% and 50%');
    break
    default:
        console.log('You Failed');
}

console.log('Program Ended')
