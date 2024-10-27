const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// what if we want to click the addCardBtn 1000 times?
//^ click event
//~ adding 1000 cards
// for(let i = 0; i < 1000; i++) {
//     addCardBtn.click()
// }

//~ adding 1000 cards with setInterval
// and to stop the setInterval, we can use clearInterval using the return value of setInterval(id)
// const intervalId = setInterval( () => {
//     if(count > 999){
//         clearInterval(intervalId)
//     }
//     addCardBtn.click() //^ click event on addCardBtn
// }, 1)


//^ focus event
// setTimeout(() => {
//     input.focus()
//     console.log('input focused')
// }, 1000);
// input.focus()

//^ blur event
// setTimeout(() => {
//     input.blur()
//     console.log('input blurred')
// }, 3000);
// input.blur()

// this basically focuses and blurs the input field after 1 and 3 seconds respectively
// that means it simulate clicking on the input field and then clicking outside of the input field in interval of 1 and 3 seconds respectively 

//^ submit event for form
// setTimeout(() => {
//     form.submit()
//     console.log('form submitted')
// }, 5000);

//^ reset event for form
// form type should be set reset