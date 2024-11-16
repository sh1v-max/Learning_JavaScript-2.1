const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  
  xhr.responseType = 'json'
  
  xhr.addEventListener('load', () => {
    image.src = xhr.response.message
    console.log(xhr)
    console.log('successfully loaded')
  })
  
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})
