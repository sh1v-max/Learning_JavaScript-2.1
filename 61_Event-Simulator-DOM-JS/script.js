const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

//^ click event
//~ adding 1000 cards
// for(let i = 0; i < 1000; i++) {
//     addCardBtn.click()
// }

//~ adding 1000 cards with setInterval
// and to stop the setInterval, we can use clearInterval using the return value of setInterval(id)
const intervalId = setInterval( () => {
    if(count > 999){
        clearInterval(intervalId)
    }
    addCardBtn.click() //^ click event on addCardBtn
}, 1)