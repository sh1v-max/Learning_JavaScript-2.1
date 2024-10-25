const h1 = document.querySelector('h1')
const addButton = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

//~ addButton.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//~ addButton.addEventListener('mousedown', (e) => {
//   //mousedown event is fired when the mouse button is pressed down
//   console.log(e)
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

addButton.addEventListener('mouseenter', (e) => {
  //mouseup event is fired when the mouse button is released
  //it work just as 'click' event but it is more specific
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

addButton.addEventListener('mouseleave', (e) => {
  //mouseup event is fired when the mouse button is released
  //it work just as 'click' event but it is more specific
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

addButton.addEventListener('mousemove', (e) => {
  //mouseup event is fired when the mouse button is released
  //it work just as 'click' event but it is more specific
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

h1.addEventListener('mouseenter', (e) => {
  //mouseup event is fired when the mouse button is released
  //it work just as 'click' event but it is more specific
  console.log(e)
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})
