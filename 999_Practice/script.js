arr = [1,2,3,4]
let sum = 0
const add = arr.forEach((elem)=>{
// const add = arr.map((elem)=>{
    sum += elem
    console.log(sum)
    return elem
})
console.log(sum)
console.log(add)
