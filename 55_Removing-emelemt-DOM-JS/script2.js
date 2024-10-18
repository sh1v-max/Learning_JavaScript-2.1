const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
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
