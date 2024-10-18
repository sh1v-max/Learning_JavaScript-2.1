const h1 = document.querySelector('h1')
let container = document.querySelector('.container')
const imgContainer = document.querySelector('.img-container')

//^ creating 100 images of pokemon and adding number to it
// //& method 1

for (i = 1; i <= 100; i++) {
  const newDiv = document.createElement('div')
  newDiv.classList.add('img-container')
  // create a new div and updating class for the div
  const newImg = document.createElement('img')
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  // create a new image and update src of the image
  const newPara = document.createElement('p')
  newPara.innerText = i
  // create a new paragraph and add text to the paragraph
  newDiv.append(newImg)
  newDiv.append(newPara)
  // append paragraph and image to the div

  container.append(newDiv)
  // append div to the container

  /*
  & method 2
  const myHTML = `
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
   <p>${i}</p>
 `
  & in this case, we can use innerHTML to add the image and paragraph to the div

  newDiv.innerHTML = myHTML
  container.append(newDiv)
  */
}

//~ for just doing this simple task, it require that much od code, to make it siple, React is used

//& method 3

let myHTML = ``

for (let i = 1; i <= 100; i++) {
  myHTML += `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
      <p>${i}</p>
    </div>
  `
}
container.innerHTML = myHTML
// here we are directly creating myHTML string and adding it to the container


//^ ================= Removing Elements =================

const myImg5 = document.querySelector("body > div > div:nth-child(5)")
const myImg6 = document.querySelector("body > div > div:nth-child(6)")

myImg6.parentElement.removeChild(myImg6) // remove the 6th image
// this is the old method to remove the element
// here we are selecting the parent of the element and then removing the child element from it

myImg5.remove() // remove the 5th image
// this is the new method to remove the element

//~ document.querySelector("body > h1").remove() 
// remove the h1 element
// no need to store in a variable, we can directly remove the element

container.remove() 
// remove the container element
// Removed from DOM, but 'container' is still in memory
container //div.container
//~ document.body.append(container)
// container will be back in dom even after using remove()

//! to complete remove it, either don't store it in a variable or use use let keyword and reassign it to null
container = null
container // null
// const would not allow to reassign it to null, so use let keyword
