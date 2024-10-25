const h1 = document.querySelector('h1')
const addButton = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

//^ some of the mouse events in javascript are:
//^ click, mousedown, mouseup, mouseenter, mouseleave, mouseout and mousemove

// addButton.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addButton.addEventListener('mousedown', (e) => {
//   //mousedown event is fired when the mouse button is pressed down
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addButton.addEventListener('mouseenter', (e) => {
//   //mouseup event is fired when the mouse button is released
//   //it work just as 'click' event but it is more specific
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addButton.addEventListener('mouseleave', (e) => {
//   //mouseleave event is fired when the mouse pointer leaves the element
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addButton.addEventListener('mouseout', (e) => {
//   //mouseout event is fired when the mouse pointer leaves the element or one of its children
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addButton.addEventListener('mousemove', (e) => {
//   //mousemove event is fired when the mouse pointer is moving while it is over the element
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addButton.addEventListener('mouseover', (e) => {
//   //mousemove event is fired when the mouse pointer is moving while it is over the element
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// h1.addEventListener('mouseenter', (e) => {
//   //mouseenter event is fired when the mouse pointer enters the element
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addButton.addEventListener('wheel', (e) => {
//   //wheel event is fired when a wheel button of a mouse is rotated in any direction
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

// addButton.addEventListener('scroll', (e) => {
//   //wheel event is fired when a wheel button of a mouse is rotated in any direction
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

addButton.addEventListener('touchstart', (e) => {
  //touchstart event is fired when a touch point is placed on the touch surface
  // must view in the mobile device(or mobile device view in the browser)
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

addButton.addEventListener('touchend', (e) => {
  //touchend event is fired when a touch point is removed from the touch surface
  // must view in the mobile device(or mobile device view in the browser)
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})