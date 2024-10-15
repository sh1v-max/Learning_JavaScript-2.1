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

/**
<p><b>Frontend development</b> is the development of the
    <a target="_blank" href="https://en.wikipedia.org/wiki/Graphical_user_interface" class="href1">
      graphical user interface </a>
    of a website, through the use of
    <a target="_blank" href="https://en.wikipedia.org/wiki/HTML" class="href2"> HTML
    </a>,
    <a target="_blank" href="https://en.wikipedia.org/wiki/CSS" class="href3"> CSS</a>, and
    <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript" class="href4"> JavaScript</a>,
    so that users can view and interact with that website.
</p>
 */
//* Accessing Parent and Child Elements
const firstLink = document.querySelector(
  'body > p:nth-child(5) > a.href1.green-link.wavy-link'
)
//right click on the element in the browser and select copy>copy js path to get this whole path at once
const link = document.querySelector('.href2') //selecting the second anchor tag
link.parentElement // <p>...</p> as it parent element is paragraph tag
link.parentElement.parentElement // body as it parent element is body
link.parentElement.parentElement.parentElement // html as it parent element is html
link.parentElement.parentElement.parentElement.parentElement // there is no parent element for html so it will return null
link.parentElement.parentElement.parentElement.parentNode
// #document its parent node (whole DOM)

//& accessing children
firstLink.children // HTMLCollection [] as there are no children of this element
firstLink.childNodes // NodeList [text] as there is one childNode "text"
firstLink.parentElement.parentElement.children
//output: HTMLCollection(10) [h1.css-image, h2, h2, hr, p, img#id-img.css-img, ul, p, script, script, id-img: img#id-img.css-img]
//it will return all the children of the 2nd parent element of the firstLink element
firstLink.parentElement.parentElement.childNodes
//output: NodeList(31) [text, h1.css-image, text, h2, text, h2, text, hr, text, p,
//text, comment, text, comment, text, img#id-img.css-img, text, ul, text, comment, text, p, text, comment, text, script, text, comment, text, script, text]
//it will return all the childNodes of the 2nd parent element of the firstLink element

//& accessing siblings
firstLink.nextElementSibling
//<a target="_blank" href="https://en.wikipedia.org/wiki/HTML" class="href2 green-link wavy-link"> HTML </a>
//it will return the next sibling of the firstLink element
firstLink.nextElementSibling.nextElementSibling
//a.href3.green-link.wavy-link
firstLink.nextElementSibling.nextElementSibling.nextElementSibling
//a.href4.green-link.wavy-link
firstLink.previousElementSibling
//<b>Frontend development</b>
firstLink.previousElementSibling.previousElementSibling
//null as there is no previous sibling
firstLink.nextSibling
//" of a website, through the use of "
//it will return the next sibling node of the firstLink element
//it looks like string but its object

//& accessing parent
firstLink.parentElement
//<p>...</p> as it parent element is paragraph tag
firstLink.parentElement.parentElement 
//<body>...</body> as it parent element is body tag