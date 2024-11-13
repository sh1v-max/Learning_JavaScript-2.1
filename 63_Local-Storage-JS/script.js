// const myName = "Max"

const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')

// nameElement.innerText = localStorage.myName
nameElement.innerText = localStorage.getItem('myName')
//~ this is the correct way of using local storage

nameInput.addEventListener('input', (e) => {
  // localStorage.myName = e.target.value
  localStorage.setItem('myName', e.target.value) 
  //~ note this step
  nameElement.innerText = localStorage.myName
})

//! but updating value using this method is not that good
