const a = 4
const b = 6

// function sum(){
//     console.log(a + b)
// }

function parent (){
    function add(){
        // debugger
        console.log(a + b)
    }
    return add
    // add()
}
// let myAdd = parent()
// myAdd()

// console.dir(add)