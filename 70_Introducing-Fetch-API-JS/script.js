fetch('https://dummyjson.com/products').then((res) => {
  console.log(res.json())// this returns a promise
  console.log(res)
})
