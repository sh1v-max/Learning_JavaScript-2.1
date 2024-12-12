// function hii (){
//   console.log(this)
// }
// hii()

const user = {
  firstName: 'John',
  lastName : 'Doe',
  fullname (){
    function getAge(){
      console.log('Getting age')
      console.log(this) // will points to window object
    }
    getAge()
    console.log(this) // will points to user object
  }
}
user.fullname()