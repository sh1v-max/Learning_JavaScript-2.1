const h1 = document.querySelector('h1')
const input = document.querySelector('input')

/*
h1.addEventListener('keypress', (e) => {
  // console.log(e)
  console.log(e.key) // log the key that was pressed
})

input.addEventListener('keypress', (e) => {
  console.log(e.key)
})
*/

window.addEventListener('keypress', (e) => {
  // fired when key is presses
  console.log('Code', e.code) // log the code of the key that was pressed
  console.log('Value', e.key) // log the value that was pressed 
}) 
// we usually apply these events on window object, so that we can listen to the keypress event on the whole window

window.addEventListener('keyup', (e) => {
  // fired when key is released
  console.log('Code', e.code) // log the code of the key that was pressed
  console.log('Value', e.key) // log the value that was pressed 
}) 

window.addEventListener('keydown', (e) => {
  // fired until key is released
  console.log('Code', e.code) // log the code of the key that was pressed
  console.log('Value', e.key) // log the value that was pressed 
}) 

// keypress wont work on shift, ctrl, alt, etc.
// keydown and keyup will work on shift, ctrl, alt, etc.