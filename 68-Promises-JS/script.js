//^ promise is a object
// that may produce a single value some time in the future
// its a constructor function, so new keyword is needed to crease a promise

//~ creating a promise

const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise ((resolve, reject) => {
  // resolve('wazir')
  // reject({name: 'wazir'})
  // setTimeout(() => {
  //   resolve({name: 'Wazir'})
  // }, 4000);

  resolveBtn.addEventListener('click', () => {
    resolve('Promise resolved') //^ this will be the data that will be passed to .then
  })

  rejectBtn.addEventListener('click', () => {
    reject('Promise rejected') //^ will be passed to .catch
    // using reject will give an error in console, and to handle that error we use .catch
  })
})
// you can resolve/reject a promise only once, if you try to resolve/reject it again, it will not work

p.then((data)  => {
  console.log(data)
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log('finally')
})

// then is called when out promise is resolved
// catch is called when our promise is rejected
// finally will be called in both the cases and it takes no data
//! promises are commonly used in the browser environment to handle async operations


const p2 = new Promise((resolve, reject) => {
  resolve('Promise resolved')
})  
//^ goes to microtask queue

setTimeout(() => {
  console.log('hii')
}); 
//^ goes to callback queue

p2.then((data)  => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})

// .then/catch goes to microtask queue
// and priority is given to microtask queue over callback queue
// remember about callstack and event loop

// const pVal = p.then((data)  => {
//   console.log(data)
// })

// const pval = p.catch((err) => {
//   console.log(err)
// })
//^ .then and .catch returns a promise, so we can chain them
// as .then and .catch return a promise, you can again apply .then and .catch on them to form chain

// chaining promises
p2.then((data) => {
  console.log(data)
  return 'chain 1'
}).then((data) => {
  console.log(data)
  return 'chain 2'
}).then((data) => {
  console.log(data)
  return 'chain 3'
}).then((data) => {
  console.log(data)
  return 'chain 4'
}).catch((err) => {
  console.log(err)
})

//& as it grows vertically and not horizontally (like callback hell), so it is use to prevent callback hell