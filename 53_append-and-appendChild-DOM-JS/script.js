//! always use "defer" in script tag in html file to run the script after the html is loaded
//! or use "DOMContentLoaded" event listener to run the script after the html is loaded
//! or put the script tag at the end of the body tag

const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
// <div class="container">…</div>flex
const card = document.querySelector('.card')
// <div class="card">1</div>flex

//^ appendChild() method
//& container.appendChild(h1)
// <div class="container">…<h1>…</h1></div>flex
// it will cut the h1 from the original position and paste it at the end of the container

//* how to copy and paste the element? i mean u want the original one at its place
//* and cloned will be pasted at the new place
//& h1.cloneNode()
// <h1></h1>x
// Creates a shallow copy of the element, Only the target element is cloned, child elements or content inside the element are not copied.
//& h1.cloneNode(true) 
// create a copy of the element with all its children
// <h1>Append and AppendChild</h1>
//& container.appendChild(h1.cloneNode(true))
// <div class="container">…<h1>…</h1></div>flex
// this will create a copy of the h1 and paste it at the end of the container
//& container.appendChild(card.cloneNode(true))
// add a copy of the card at the end of the container

// for(let i = 2; i <=100; i++){
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.appendChild(newCard)
// }

// appending text using appendChild
const newTextNode = document.createTextNode('Hello World')
// "Hello World"
container.appendChild(newTextNode)
// <div class="container">…Hello World</div>flex
// we cant directly append text using appendChild method

//& container.appendChild(document.body)
//Failed to execute 'appendChild' on 'Node': The new child element contains the parent.
//~ we can't append the parent element to its child element
//~ we can append sibling elements, any element outside the parent element
//~ appendChild returns the appended element, so we can chain the appendChild method

//^ append() method
// using append() method we can append multiple elements at once
// for(let i = 2; i <=100; i++){
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

container.append('Hello')
// <div class="container">…Hello</div>flex
// can append text

container.append('hello', h1, 'world')
// <div class="container">…Hello<h1>Append and AppendChild</h1>world</div>flex
// can append multiple elements at once

//~ append() method is more flexible than appendChild() method
//~ we can append multiple elements at once
//~ it returns undefined