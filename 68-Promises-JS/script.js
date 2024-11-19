//^ promise is a object
// that may produce a single value some time in the future
// its a constructor function, so new keyword is needed to crease a promise

//~ creating a promise

const btn = document.querySelector('#resolve-btn')

const p = new Promise ((resolve, reject) => {
  // resolve('wazir')
  // reject({name: 'wazir'})
  setTimeout(() => {
    resolve({name: 'Wazir'})
  }, 4000);
})