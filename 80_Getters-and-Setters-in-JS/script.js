// class CreateUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   }

//   getFullName() {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// const user1 = new CreateUser('Aman', 'Mishra', 32)
// const user2 = new CreateUser('Anurag', 'Singh', 72)

const user = {
  firstName : 'Anurag',
  lastName : 'Singh',
  get fullName(){
    // console.log('getting...')// this will be called when we try to access the fullName property
    // ie. when we invoke the get property
    return `${this,this.firstName} ${this.lastName}`
  },
  set fullName(value){
    console.log('setting...')
    console.log(value)
    // const splitted = value.split(' ')
    // console.log(splitted)
    // this.firstName = splitted[0]
    // this.lastName = splitted[1]
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
  // while setting it, we have to set it as a property
}

// console.log(user.fullName())
// user.fullName = 'singh anurag'
// now, fullName is a property and not a function, the "fullName" function is overwritten by the fullName property
// console.dir(user)

//^ with the get keyword, we can access the function as a property
// user.fullName 
// output: getting...
// Anurag Singh

//& The console.log('getting...') statement is executed when 
// the getter is accessed, regardless of whether you're using 
// it correctly. So, calling user.fullName() attempts to access 
// the getter, which triggers the console.log('getting...')

user.fullName = 'singh anurag'
// output: singh anurag
// this is how we set the value of the fullName, same as we do in property
//^ and this is how we call the setter, with value