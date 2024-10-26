const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

//^ bubbling is the default behavior of the event propagation in the DOM. It means that when an event is fired on an element, it will bubble up to the parent element.
window.addEventListener('click', () => {
    console.log('window event listened')
})
document.addEventListener('click', () => {
    console.log('document event listened')
})
document.body.addEventListener('click', () => {
    console.log('body event listened')
})
green.addEventListener('click', () => {
    console.log('green event listened')
})
pink.addEventListener('click', () => {
    console.log('pink event listened')
})
blue.addEventListener('click', () => {
    console.log('blue event listened')
})

//~ if we click on blue, it will bubble up to the parent element, pink, and then green, and then body, document, and window.