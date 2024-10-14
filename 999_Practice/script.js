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
//difference between map and forEach
//map returns an array of the same length as the original array
//forEach returns undefined
//map is used when you want to create a new array