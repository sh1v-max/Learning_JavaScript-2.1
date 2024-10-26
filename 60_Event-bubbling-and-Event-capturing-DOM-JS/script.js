const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

//^ bubbling is the default behavior of the event propagation in the DOM. It means that when an event is fired on an element, it will bubble up to the parent element.
window.addEventListener('click', (e) => {
    console.log('6. window event listened')
}, true)
document.addEventListener('click', (e) => {
    console.log('5. document event listened')
}, true)
document.body.addEventListener('click', (e) => {
    console.log('4. body event listened')
}, true)
green.addEventListener('click', (e) => {
  e.stopPropagation() 
  // stopPropagation() method stops the bubbling of an event to parent elements, preventing further bubbling.
    console.log('3. green event listened')
}, true)
pink.addEventListener('click', (e) => {
    console.log('2. pink event listened')
  }, {capture: true})
// we can also use the object to set the event to be captured, not bubbled.
// {capture: true} is used to set the event to be captured, not bubbled.

blue.addEventListener('click', (e) => {
  // e.stopPropagation() 
  // stopPropagation() method stops the bubbling of an event to parent elements, preventing further bubbling.
    console.log('1. blue event listened')
}, {capture: true, once: true})
//{once: true} is used to set the event to be executed only once.

// true in addEventListener() method is used to set the event to be captured, not bubbled.
//it will print the output in the order of the event capturing.
// ie. window, document, body, green, pink, blue and will stop when encountered stopPropagation() method.
//~ if we click on blue, it will bubble up to the parent element, pink, and then green, and then body, document, and window.

