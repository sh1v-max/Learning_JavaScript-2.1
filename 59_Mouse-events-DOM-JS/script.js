const h1 = document.querySelector('h1')
const addButton = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

//^ some of the mouse events in javascript are:
//^ click, mousedown, mouseup, mouseenter, mouseleave, mouseout and mousemove
//^ wheel, scroll, drag, touchstart, touchend, touchmove

//~ click
// addButton.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//~ mousedown
// addButton.addEventListener('mousedown', (e) => {
//   //mousedown event is fired when the mouse button is pressed down
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~ mouseup
// addButton.addEventListener('mouseup', (e) => {
//   //mousedown event is fired when the mouse button is pressed down
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~ mouseenter
// addButton.addEventListener('mouseenter', (e) => {
//   //mouseup event is fired when the mouse button is released
//   //it work just as 'click' event but it is more specific
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~ mouseleave
// addButton.addEventListener('mouseleave', (e) => {
//   //mouseleave event is fired when the mouse pointer leaves the element
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~ mouseout
// addButton.addEventListener('mouseout', (e) => {
//   //mouseout event is fired when the mouse pointer leaves the element or one of its children
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~ mousemove
// addButton.addEventListener('mousemove', (e) => {
//   //mousemove event is fired when the mouse pointer is moving while it is over the element
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~ mouseover
// addButton.addEventListener('mouseover', (e) => {
//   //mousemove event is fired when the mouse pointer is moving while it is over the element
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~wheel
// addButton.addEventListener('wheel', (e) => {
//   //wheel event is fired when a wheel button of a mouse is rotated in any direction
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~scroll
// addButton.addEventListener('scroll', (e) => {
//   //wheel event is fired when a wheel button of a mouse is rotated in any direction
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//~drag
// drag event only works on desktop and not for mobile view or mobile device
// to use drag event, element must have draggable attribute set to true in the html
// i have set draggable = true in the h1 element
h1.addEventListener('drag', (e) => {
  //drag event is fired when an element or text selection is being dragged
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

//~ touchstart
addButton.addEventListener('touchstart', (e) => {
  //touchstart event is fired when a touch point is placed on the touch surface
  // must view in the mobile device(or mobile device view in the browser)
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

//~ touchend
addButton.addEventListener('touchend', (e) => {
  //touchend event is fired when a touch point is removed from the touch surface
  // must view in the mobile device(or mobile device view in the browser)
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

//~ touchmove
addButton.addEventListener('touchmove', (e) => {
  //touchmove event is fired when a touch point is moved along the touch surface
  // must view in the mobile device(or mobile device view in the browser)
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

//~ pointermove
addButton.addEventListener('pointermove', (e) => {
  //pointermove event is fired when a pointing device is moved while it is over the element
  //works for both mobile and desktop
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})