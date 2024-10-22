//^ form event

const usernameInput = document.querySelector('#username')

// usernameInput.addEventListener('click', () => {
//   console.log('input clicked')
// }) 

// usernameInput.addEventListener('dblclick', () => {
//   console.log('input double clicked')
// }) 
usernameInput.addEventListener('input', () => {
  // console.log('some input')
}) 
// input event is Triggered every time the user types in a text input or textarea
usernameInput.addEventListener('input', (event) => {
  console.log(event)
  // returns the event object
  // InputEvent {isTrusted: true, data: 'a', isComposing: false, inputType: 'insertText', dataTransfer: null, …}
  console.log(event.target.value)
  // returns the value of the input entered
  console.log('some input')
}) 