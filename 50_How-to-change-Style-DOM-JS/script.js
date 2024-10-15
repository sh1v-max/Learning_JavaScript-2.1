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

for(elem of allLinks){
  elem.style.color = 'teal'
}