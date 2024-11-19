// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'
// xhr.addEventListener('load', () => {
  // console.log(xhr);
  // console.log(xhr.response);
  // console.log(xhr.response.users);
  // console.log(xhr.response.users[0]);
  // console.log(xhr.response.users[0].id)
  //^ now what we want to do is, to create another instance of XMLHttpRequest
  //^ and then we will make another request for post by the user to the server
  //^ and we will fetch the id of first user with the post
  // const xhr2 = new XMLHttpRequest()
  // xhr2.responseType = 'json'
  // xhr2.addEventListener('load', () => {
  //   console.log(xhr2.response.posts)
  // })
  //^ we basically are just copying the code from above and pasting it here
// })


// xhr.open('GET', 'https://dummyjson.com/users')
// xhr.send()

//~ to prevent copying and pasting the code, we can create a function

function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.addEventListener('load', () => {
    // console.log(xhr.response)
    callback(xhr.response)
  })

  xhr.open(method, url)
  xhr.send()
}
//^ now the above function is reusable

makeHttpRequest('GET', 'https://dummyjson.com/users', (userData) => {
  // console.log(data) // all the data
  // console.log(data.users) // all the users
  // console.log(data.users[0])  // first user
  // console.log('hii')
  console.log(userData)  // id of first user
  // console.log(userData.users[4])
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`, (postData) => {
    console.log(postData)
    makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentsData) => {
      console.log(commentsData.comments[0].user.id)
      makeHttpRequest('GET',`https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (commentUser) => {
        console.log(commentUser)
      })
    })
  })
})


// makeHttpRequest('GET', 'https://dummyjson.com/users', (userData) => {
//   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`, (postData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentsData) => {
//       makeHttpRequest('GET',`https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (commentUser) => {
//         console.log(commentUser)
//       })
//     })
//   })
// })
//! this triangle of doom is called callback hell