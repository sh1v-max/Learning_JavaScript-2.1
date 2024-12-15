Date()
// 'Sat Dec 14 2024 13:25:29 GMT+0530 (India Standard Time)' (string)
const isoDate = '2024-12-14T13:13:44.925Z'
const myDate = new Date()
// Sat Dec 14 2024 13:25:29 GMT+0530 (India Standard Time) (object)
console.log(myDate)
console.log('ISO format:', myDate.toISOString())
// console.dir(myDate)
// in the object formate
console.log("time laps since jan 1 1970:", myDate.getTime()) // 1734163137773
console.log("date and time:", myDate.toLocaleString()) // 12/14/2024, 2:36:51 PM // this is american format
console.log("date and time:", myDate.toLocaleString('en-GB')) // 14/12/2024, 14:39:01 // this is british/indian format
// now time has changed into 24 hours format
console.log("date and time:", myDate.toLocaleString('en-GB', {hour12: true })) // 14/12/2024, 14:39:01 
// hour format has changed to 12 hour format
console.log("date:", myDate.toLocaleDateString('en-GB')) // 14/12/2024
// only date
console.log("day:", myDate.getDate()) // 14
console.log('month:', myDate.getMonth()+ 1) // 11 
// month starts from 
console.log("year:", myDate.getFullYear()) // 2024 
console.log("UTC year:", myDate.getUTCFullYear()) // 2024 
console.log("month:", myDate.getMonth()) // 2024 
console.log("week day:", myDate.getDay()) // 6 // 0 is sunday
console.log("hours:", myDate.getHours()) // 16
console.log("minutes:", myDate.getMinutes()) // 16
console.log("seconds:", myDate.getSeconds())// 45
console.log("milliseconds:", myDate.getMilliseconds()) // 672 
console.log("time zone offset:", myDate.getTimezoneOffset()) // -330
// -ve indicates that local time is ahead of UTCz
console.log("JSON:", myDate.toJSON()) // -330

//^ UTC will show everything but for the UTC time, ie. england time
console.log("UTC hours:", myDate.getUTCHours()) // 16
console.log("UTC minutes:", myDate.getUTCMinutes()) // 16
