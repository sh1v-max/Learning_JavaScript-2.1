function changeImage1() {
  document.body.children[4].src = 'https://images5.alphacoders.com/137/1372790.png'
  // the script tag must be at the end of the body tag to work
}
//calling the function will change the image

// document.body.children[4].src = 'https://images5.alphacoders.com/137/1372790.png'
// the script tag must be at the end of the body tag to work
//! its called DOM manipulation

function changeImage2() {
  document.body.children[5].children[2].children[4].src = 'https://pharmawiki.in/wp-content/uploads/2012/04/images5.jpg'
}

function changeImage3() {
  document.body.children[5].children[3].children[4].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYWDxjt9GrMZ2-5FD4fFtSFM0n0bbSMCXwg&s'
}