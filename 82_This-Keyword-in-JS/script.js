// function hii (){
//   console.log(this)
// }
// hii()

const user = {
  firstName: 'John',
  lastName : 'Doe',
  tags: ['a', 'b', 'c'],
  printTags(){
    console.log(this.tags)
    this.tags.forEach(function(tag){
      console.log(tag)
      console.log(this.firstName)// this will return undefined because this is pointing to window object
      // now to let this point to user object we can use "this" after the function
    }, this) //^ doing this will make "this" inside function point to user object
  },
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
user.printTags()

//! if there is another function withing a method in an object then "this" will point to window object