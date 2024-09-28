// function a(b) {
//   // console.log(typeof(b))
//   // console.log(b);
//   console.dir(b);

//   b()
// }
// // a('hello');
// // a({username:'wazir', userAge: 25});
// // a([1,2,3,4,5]);


// function sayHi() {
//   console.log('Hiiiiiiiiii');
// }

// a(sayHi);


// function a(b) {
//   console.dir(b);
//   b()
// }

// function sayHi() {
//   console.log('Hiiiiiiiiii');
// }

// a(sayHi);



// higher order function
function a(b) {
  console.dir(b);
  b()
}


// callback function
a(function sayBye() {
  console.log('Hiiiiiiiiii');
});


