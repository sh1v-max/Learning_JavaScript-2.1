//^ this within normal function

function Hii (){
  this.hello = 'Hello' // it will add hello property to function hii
  // console.log(this)
}
Hii()

//! for a function, this will point to window object

//=======================================================
//^ this withing constructor function
// new keyword(constructor function) will create a new object and and returns it
// constructor function has a convention of denoting the first letter as capital 

new Hii() // and this will point to the object created by new keyword

//! this will point to the object created by new keyword

//=======================================================
//^ this withing object, method and function withing method inside object 

const user0 = {
  firstName: 'John',
  lastName : 'Doe',
  tags: ['a', 'b', 'c'],
  printTags(){
    console.log(this.tags)
    this.tags.forEach(function(tag){
      console.log(tag, this.firstName)
      console.log(this.firstName)// this will return undefined because this is pointing to window object
      // now to let this point to user object we can use "this" outside the function
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
// user0.fullname()
// user0.printTags()

//! if there is another function withing a method in an object then "this" will point to window object
//! for an object or method, this will point to the object itself, or the object which calls the method, or this

//=======================================================
//^ this with event listener

const h1 = document.querySelector('h1')
// console.log(h1)
h1.addEventListener('click', function(){
  // console.log('h1 clicked')
  // console.log(this) // this will point to h1 element
})

//! this will point to that object where we've added event listener

//=======================================================
//^ this withing arrow function

const user = {
  firstName: 'John',
  lastName : 'Doe',
  tags: ['a', 'b', 'c'],
  printTags: () => {
    console.log(this) // with arrow function, this will point to window object
  }
}
// user.printTags()

//& arrow function don't have their own binding to this, arguments, or super, and should not be used as methods
//! with arrow function, this will point to window object
//! so if you want to access this, then avoid using arrow function

const body = document.querySelector('body')
body.addEventListener('click', (e) => {
  console.log(e.target)
  console.log(e.currentTarget) // this will print body, where eventlistener is added 
  console.log(this) // this will point to window object
})

//! arrow with addEventListener, this will point to window object
//! and arrow with addEventListener is not recommended

//=======================================================
//^ this withing class

class User{
  constructor(){
    this.firstName = 'john'
    console.log(this)
  }
  getUser (){
    console.log(this)
  }
}
// new User()
new User().getUser()

// as class returns an object, this will point to that object only
//! in class, this will point to the object created by new keyword
//& so this keyword basically points to the object that created it