//^ method 1
// simplest way is to use onClick attribute in HTML
// but we won't use that often
/*
<h1 onclick="sayHi()">Adding Event Listeners</h1>
  <div onclick="clickContainer()" class="container">
  <div ondblclick="clickCard()" class="card">1</div>
</div>
 */

// function clickH1() {
//   console.log('you just clicked heading')
// }

function clickContainer() {
  console.log('you just clicked container')
}

function clickCard() {
  console.log('you just clicked card twice')
}


//^ method 2
// define a function and then add event listener to it
const h1 = document.querySelector('h1')

function clickH1() {
  console.log('you just clicked heading')
}
function secondClick() {
  console.log('next click')
}

// h1.onclick = clickH1
// h1.onclick = secondClick
// this will only run secondClick, second function because it overwrites the first one

//^ method 3 
// addEventListener
h1.addEventListener('click', clickH1)
h1.addEventListener('click', function () {
  console.log('second hii')
})
// this will run both functions

