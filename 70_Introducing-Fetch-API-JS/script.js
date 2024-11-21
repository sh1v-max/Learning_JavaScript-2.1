//~ fetch('https://dummyjson.com/products').then((res) => {
  // console.log(res)
  // res.json()
  // console.log(res.json())// this returns a promise, we can apply .then
  // res.json().then((data) => {
  //   console.log(data) // this will return the actual data
  // }) 
  //as res.json() itself is a promise, we can again apply .then
//~   res.json().then((data) => {
//~     console.log(data)
//~   })
//~ })

//^ whenever we use fetch to send request, we dont get the data directly, 
//^ we get a response object, which we can use to get the data
// in the above code, we are using res.json() to extract the data from the response
// console.log(res.json() its a promise

//& fetch('https://dummyjson.com/products').then((res) => {
//   console.log(res)
// })
//output: Response {type: 'cors', url: 'https://dummyjson.com/products', 
//        redirected: false, status: 200, ok: true, …}
//  returns a Promise that resolves to a Response object

//& fetch('https://dummyjson.com/products').then((res) => {
//   console.log(res.json())
// })
//output: Promise {<pending>}
// here res.json() converts the Response object (res) to a JavaScript object by 
// parsing the JSON content in the response body

//^ fetch('https://dummyjson.com/products').then((res) => {
// res.json().then((data) => {
//     console.log(data)
//   })
// })
// above code can be written as below

//& fetch('https://dummyjson.com/products')
// .then((res) => {
//   return res.json()// as it return a promise, we can apply .then
// }).then((data) => {
//   console.log(data)
// })

// above code can be written as below (using implicit return)

//& fetch('https://dummyjson.com/products')
// .then((res) => res.json())
// .then((data) => console.log(data))

// fetch('https://dummyjson.com/products', {
//   method: 'GET' // default is GET
  // method:'POST'
// })
// .then(res => res.json())
// .then((data) => console.log(data))
// .then(console.log);
// .catch((err) => {
//   console.log(err)
// })

fetch('https://dummyjsn.com/products/add', {
  method: 'POST',
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log)
.catch((err) => {
  console.log(err)
})