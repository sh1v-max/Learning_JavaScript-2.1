const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelectorAll('a')

// document.querySelector('h1').style
h1.style.color
// CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
//using style wont show the css properties written in the css file

// document.querySelector('h1').style.color = 'hotpink'
h1.style.color = 'hotpink'
// change the color of the h1 to hotpink

// document.querySelector('h1').style.backgroundColor = 'pink'
h1.style.backgroundColor = 'pink'
// change the background color of the h1 to pink

//changing color of all anchor tags
// for(let i = 0; i< allLinks.length; i++){
//   allLinks[i].style.color = 'teal'
// }

for (const link of allLinks) {
  //& method 1: using style property
  // link.style.color = 'teal'
  // link.style.textDecorationLine = 'none'
  // link.style.fontWeight = 'bold'
  // link.style.fontFamily = 'cursive'

  //& method 2: using cssText property
  // link.style.cssText = `  
  // color: teal;
  // font-size: 18px;
  // font-family: cursive;
  // font-weight: 700;
  // text-decoration-line: none;`

  //& method 3: using className property (recommended for one class)
  // link.className = 'green-link' //inherit the css properties from the css file
  // link.className = 'wavy-link' //will overwrite the previous class properties
  // will overwrite any class properties that are already there with element
  //to prevent this we can use : link.className = 'already-present-class green-link' 

  //& method 4: using setAttribute property
  // link.setAttribute('class', 'green-link')

  //& method 5: using classList property (recommended for multiple classes)
  link.classList.add('green-link')
  link.classList.remove('my-link')
  link.classList.toggle('wavy-link')
}
//giving style like this wont allow you to write like we do in css file
//for example text-decoration: none; font-weight: bold;

//! applying any of these does not change the css file or the main HTML file, it only changes the style of the elements in the DOM
