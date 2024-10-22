//^ form event

//& click and double click event
const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener('click', () => {
//   console.log('input clicked')
// }) 

// usernameInput.addEventListener('dblclick', () => {
//   console.log('input double clicked')
// }) 

//& input event
usernameInput.addEventListener('input', () => {
  // console.log('some input')
}) 
// input event is Triggered every time the user types in a text input or textarea

let inputVal

usernameInput.addEventListener('input', (event) => {
  // console.log(event)
  // returns the event object
  // InputEvent {isTrusted: true, data: 'a', isComposing: false, inputType: 'insertText', dataTransfer: null, …}
  // console.log(event.target.value)
  // returns the value of the input entered
  // inputVal = event.target.value
  // paragraph.innerText = event.target.value
  // console.log('some input')
}) 

//& change event
usernameInput.addEventListener('change', (event) => {
  // fired when the value of an input element changes and the user leaves the element (loses focus)
  // console.log(event)
  // console.log(event.target.value)
  // returns the value of the input entered
  // inputVal = event.target.value
  // paragraph.innerText = event.target.value
  // console.log('some input')
}) 

//& focus event
usernameInput.addEventListener('focus', (event) => {
  // Triggered when an element gains focus, such as when the user clicks on an input field.
  // console.log(event)
  // console.log(event.type)
  // console.log(event.target.value)
  // returns the value of the input entered
  // inputVal = event.target.value
  // paragraph.innerText = event.target.value
  // console.log('some input')
}) 

//& blur event
usernameInput.addEventListener('blur', (event) => {
  // Fired when an element loses focus
  // console.log(event.type)
  // console.log(event)
  // console.log(event.target.value)
  // returns the value of the input entered
  // inputVal = event.target.value
  // paragraph.innerText = event.target.value
  // console.log('some input')
}) 

//& submit event on form elements
form.addEventListener('click', (event) => {
  event.preventDefault()
  // prevents the default action of the form
  const myFormData = new FormData(form)
  // console.log(myFormData)

  // console.log(myFormData.entries())

  for(const p of myFormData.entries()) {
    console.log(p)
  }
  // output: (2) ['username', 'harsh']
  // scrypt.js:80 (2) ['email', 'singhshiv0427@gmail.com']
  // console.log(event)
})

form.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('form submitted')
})