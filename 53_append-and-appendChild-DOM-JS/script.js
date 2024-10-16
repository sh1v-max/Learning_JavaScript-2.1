//! always use "defer" in script tag in html file to run the script after the html is loaded
//! or use "DOMContentLoaded" event listener to run the script after the html is loaded
//! or put the script tag at the end of the body tag

const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
// <div class="container">…</div>flex
const card = document.querySelector('.card')
// <div class="card">1</div>flex

//^ append() method
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


