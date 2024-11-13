// const myName = "Max"

const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageElement = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')

// nameElement.innerText = localStorage.myName
// nameElement.innerText = localStorage.getItem('myName')
// //~ this is the correct way of using local storage

// nameInput.addEventListener('input', (e) => {
//   // localStorage.myName = e.target.value
//   localStorage.setItem('myName', e.target.value) 
//   //~ note this step
//   nameElement.innerText = localStorage.getItem('myName')
// })

// //! but updating value using this method is not that good
// // minor difference between the two methods
// // localStorage.getItem('age')
// // will return "null"
// // localStorage.age
// // will return "undefined"

// ageElement.innerText = localStorage.getItem('myAge')
// ageInput.addEventListener('input', (e) => {
//   localStorage.setItem('myAge', e.target.value);
//   ageElement.innerText = localStorage.getItem('myAge')
// })

//^ i want to store both at a time, so i am using object
const myData = {
  name: '',
  age: '',
}

nameInput.addEventListener('input', (e) => {
  myData.name = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  // as we cant store object in local storage, we have to convert it into string
  // JSON.stringify() is used to convert object into string
  // and the string is called json string
  //~ and we can use JSON.parse() to convert json string back into object
})

ageInput.addEventListener('input', (e) => {
  myData.age = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
})