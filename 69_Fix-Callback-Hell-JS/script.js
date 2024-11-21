function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
      resolve(xhr.response)
    })
    xhr.addEventListener('error', () => {
      // console.log('Request failed')
      reject('Request failed')
    })
  })

  xhr.open(method, url)
  xhr.send()

  return promise
}

// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//       makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//         console.log(userData);
//       });
//     });
//   });
// })


makeHttpRequest('GET', 'https://dummyjson.com/users')
.then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((postsData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
.then((commentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
.then((commentUserData) => console.log(commentUserData))
.catch((error) => {
  console.log('Request failed')
})
// we can add as many .then as we want to chain the promises

// makeHttpRequest('GET', 'https://dummyjson.com/users')
// .then((userData) => {
//   return makeHttpRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`)
// })
//^ can also be written as below using implicit return
// makeHttpRequest('GET', 'https://dummyjson.com/users')
// .then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))

//^ This is how we can avoid callback hell using promises
//^ here, flow of our program is vertical and not horizontal so is very clear and easy to understand