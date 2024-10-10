function changeImage1() {
  document.body.children[4].src =
    'https://images5.alphacoders.com/137/1372790.png'
  // the script tag must be at the end of the body tag to work
}
//calling the function will change the image

// document.body.children[4].src = 'https://images5.alphacoders.com/137/1372790.png'
// the script tag must be at the end of the body tag to work
//! its called DOM manipulation

function changeImage2() {
  document.body.children[5].children[2].children[4].src =
    'https://pharmawiki.in/wp-content/uploads/2012/04/images5.jpg'
}
function changeImage3() {
  document.body.children[5].children[3].children[4].src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYWDxjt9GrMZ2-5FD4fFtSFM0n0bbSMCXwg&s'
}

//* selecting elements in the DOM
const allImages = document.images
//special property of image which will selects all the images in the DOM
const allImages2 = document.getElementsByTagName('img')
//selects all the images in the DOM
const allPara = document.getElementsByTagName('p')
//selects all the paragraphs in the DOM
const allPara2 = document.getElementsByTagName('p')[3]
//selects the 4th paragraph in the DOM
const cssImg = document.getElementsByClassName('css-img')
//selects all the elements with the class of imgClass
//as it says 'getElements(plural)' it will return an array of all the elements based on passed argument
const idImg = document.getElementById('id-img')
//selects the element with the id of imgId
//as it says 'getElement(singular)' it will return the element based on passed argument
//& and it will be in the form of HTMLCollection
//* querySelector is a method in JavaScript that allows you to select the first element
//* in the DOM that matches a given CSS selector. It returns the first matching element
//* or null if no match is found.
const queryImg = document.querySelector('.query-img')
const queryImg2 = document.querySelectorAll('#query-img')
//selects the first element with the class of query-img
//it will return element in the form of NodeList
const jsImage = document.querySelector('[alt="javascript roadmap"]')
//selects the first element with the attribute of alt with the value of javascript roadmap
//we can also select the element with the attribute of src, href, etc.
const li = document.querySelector('ul')
// const ulLi = document.querySelector('ul li')
const ulLiAll = document.querySelectorAll('ul li')
// jsImage.src = 'https://images5.alphacoders.com/137/1372790.png'
const allImage = document.querySelectorAll('.css-img')
//output : NodeList(3) [img.css-img, img.css-img, img.css-img]
const imagesUrl = [
  'https://images5.alphacoders.com/137/1372790.png',
  'https://pharmawiki.in/wp-content/uploads/2012/04/images5.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYWDxjt9GrMZ2-5FD4fFtSFM0n0bbSMCXwg&s',
]
//changing images using functions
//call the function and the image will be change
function changeImg1() {
  document.querySelector('#id-img').src = imagesUrl[0]
}
function changeImg2() {
  document.querySelector('#id-img').src = imagesUrl[1]
}
function changeImg3() {
  document.querySelector('#id-img').src = imagesUrl[2]
}
//changing all images at once using for loop
// for (let i = 0; i < imagesUrl.length; i++) {
//   allImage[i].src = imagesUrl[i]
// }

//changing all images at once using forEach loop
// const allImage = document.querySelectorAll('.css-img')
// const imagesUrl = [
//   'https://images5.alphacoders.com/137/1372790.png',
//   'https://pharmawiki.in/wp-content/uploads/2012/04/images5.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYWDxjt9GrMZ2-5FD4fFtSFM0n0bbSMCXwg&s'
// ]
allImage.forEach((elem, index) => {
  elem.src = imagesUrl[index]
})
//foeEach wont work on HTMLCollection
//forEach works on NodeList
//querySelectorAll returns NodeList
//getElementsByTagName returns HTMLCollection
//so we can apply forEach on NodeList only and not on HTMlCollection
//or convert HTMLCollection into array using (...) spread operator or any other methods and apply forEach on it
const allImage0 = [...document.getElementsByClassName('css-img')]

//we can apply querySelectorAll on any element
const container = document.getElementById('container');
const childElement = container.querySelector('.child-class'); // Searches within the #container element for .child-class
//here we are searching for the child element with the class of child-class inside the container element
class Image {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}