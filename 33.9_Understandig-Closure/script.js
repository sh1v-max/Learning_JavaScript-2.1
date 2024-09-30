/*
function grandParent() {
    const a = 10
    function parent(){
        const b = 20
        function child(){
            const c = 30
            console.log(a + b + c)
        }
        return child
    }
    return parent
}
const x = grandParent();
const y = x();
console.dir(y)
y()
*/


/*
function gp(){
    const a = 2
    function p(){
        const b = 5
        function child(){
            console.log(a + b)
        }
        return child
    }
    const y = p()
    y()

    console.dir(y)  
}
gp()
const z = gp
*/


// function x(){
//     let a = 0
//     function child(){
//         a++
//     }
//     return child
// }
// const y = x()
// console.dir(y)
// y()


// function doSomething(){
//     const username = 'john'

//     function callBackFunction(){
//         console.log(username)
//     }

//     console.dir(callBackFunction)
//     setTimeout(callBackFunction, 2000)
// }
// doSomething()

function createdOnceFunction(){
    let executed = false

    return function () {
        if(!executed){
            executed = true
            console.log(`congratulation you have called the function`)
        }
    }
}

const once = createdOnceFunction()

//this function will print for once only (think why?)