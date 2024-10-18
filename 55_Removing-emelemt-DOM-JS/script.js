const h1 = document.querySelector('h1')
const container = document.querySelector('.container')

// const firstImg = document.querySelector('img')

//^ Create a new element using cloneNode
// cloning requires an image/element to be cloned

// for(i = 2; i <=100; i++){
//   const newImg = firstImg.cloneNode()
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(newImg)
// }

//^ create a new element using document.createElement
// document.createElement requires an element as parameter
document.createElement('Wazir')
//<wazir></wazir>
document.createElement('DIV')
//<div></div>
//~ its not div tag, its a div element (its an object)DOM object
// document.body.appendChild(p)
// it will append the paragraph to the body at the end

const paragraph = document.createElement('p')
// create a new paragraph
paragraph.innerText = 'Hello' // adding text to the paragraph
paragraph.classList.add('my-para') // adding class to the paragraph
// must use classList.add to add class to the element
paragraph.id = 'my' // adding id to the paragraph
//& container.appendChild(paragraph)
// it will append the paragraph to the container at the end

const firstImg = document.createElement('img')
firstImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
// container.appendChild(firstImg) 
// it will create append the image to the container at the end

for(i = 1; i <=100; i++){
  const newImg = document.createElement('img')
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  container.append(newImg)
  const newText = document.createElement('p')
  newText.classList.add('text')
  newText.innerText = `${i}`
  container.append(newText)
}

