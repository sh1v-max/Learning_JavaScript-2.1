const arr = [1,2,[3,4],5]
const ref = JSON.parse(JSON.stringify(arr))
ref[1] = 10
ref[2][0] = 30
console.log(arr, ref);
// this is deep copy
// it creates a completely new array