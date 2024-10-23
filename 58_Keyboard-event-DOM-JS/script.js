const h1 = document.querySelector('h1')
const input = document.querySelector('input')

h1.addEventListener('keypress', (e) => {
  console.log(e)
})

input.addEventListener('keypress', (e) => {
  console.log(e.key)
})