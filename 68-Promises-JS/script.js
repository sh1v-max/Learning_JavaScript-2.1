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
})