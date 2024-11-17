const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  // debugger;
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  
  //^ using eventlistener with load property
  // xhr.addEventListener('load', () => { // load event is fired when the request has successfully completed
    // console.log(xhr.response) // its in json format
    // console.log(JSON.parse(xhr.response)) // converting json to js object
    // image.src = xhr.response.message
    // console.log(xhr)
    // console.log('successfully loaded')
    // setting the src of the image to the url of the image
  // })
  
  //^ using onload property
  xhr.onload = () => {
    // debugger
    image.src = xhr.response.message
    console.log(xhr)
    console.log('successfully loaded')
  }
  
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})
