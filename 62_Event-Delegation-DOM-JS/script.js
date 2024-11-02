const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')
const cardList = document.querySelectorAll('.card')

//^ event delegation Event delegation is a technique in JavaScript that allows
//^ a single event listener to manage events for multiple child elements through 
//^ a parent element. This is achieved using the concept of event bubbling.

let count = 1
//^ we want to delete and specific card when we click on it
addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++

//~   newCard.addEventListener('click', (e) => {
//     newCard.remove()
//   })
  //this will add the event listener to all the new card that we create
  //with click event and when clicked, it will remove the card
  //! this is not a good way to do this, as we are adding event listener to each card
  container.append(newCard)
})

container.addEventListener('click', (e) => {
    // console.log(e.target)
    // e.target.remove()
    if(e.target !== container) {
        e.target.remove()
    }
})
//!this is called event delegation, we are adding the event listener to the parent element
//and then checking if the target element is the card or not
//if it is then we remove it

//this is a better way to do this, as we are adding the event listener to the parent element
//and saves memory and time