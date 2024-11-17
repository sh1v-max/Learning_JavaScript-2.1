const image = document.querySelector('img')
const button = document.querySelector('button')
const blockingBtn = document.querySelector('.blocking-btn')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  // xhr.responseType = 'json' // for synchronous function, you're not allowed to set response type
  console.log(xhr.response) 

  xhr.addEventListener('load', () => {
    image.src = JSON.parse(xhr.response).message
    console.log(xhr.response)
  })

  //^ using third parameter as false makes it synchronous
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', false)
  xhr.send()
})

// ^ setTimout is a asynchronous function
// setTimeout(() => {
//   console.log('hii');
// }, 4000);

// ^ alert is a synchronous function
// alert('hello')

//^ another example of synchronous function 
blockingBtn.addEventListener('click', () => {
  const startTime = Date.now()
  let currentTime = startTime

  while (startTime + 5000 > currentTime) {
    currentTime = Date.now()
  }
})
