const image = document.querySelector('img')
const button = document.querySelector('button')
const blockingBtn = document.querySelector('.blocking-btn')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  // xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = JSON.parse(xhr.response).message
    console.log(xhr)
  })

  // xhr.onload = () => {
  //   image.src = xhr.response.message
  //   console.log(xhr)
  // }

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
