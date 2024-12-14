Date()
// 'Sat Dec 14 2024 13:25:29 GMT+0530 (India Standard Time)' (string)
const myDate = new Date()
// Sat Dec 14 2024 13:25:29 GMT+0530 (India Standard Time) (object)
console.log(myDate)
// console.dir(myDate)
// in the object formate
console.log("time laps since jan 1 1970: " + myDate.getTime()) // 1734163137773
console.log("date and time: " + myDate.toLocaleString()) // 12/14/2024, 2:36:51 PM // this is american format
console.log("date and time: " + myDate.toLocaleString('en-GB')) // 14/12/2024, 14:39:01 // this is british/indian format
// now time has changed into 24 hours format
console.log("date and time: " + myDate.toLocaleString('en-GB', {hour12: true })) // 14/12/2024, 14:39:01 
// hour format has changed to 12 hour format
console.log("date: " + myDate.toLocaleDateString('en-GB', {hour12: true })) // 14/12/2024
// only date