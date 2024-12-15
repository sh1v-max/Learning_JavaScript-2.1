// 
const myDate = new Date(1734261139001) // passing the timestamp in this will return the date and time 
// and it will not change further after we console myDate
console.log(myDate) // it will remain same if there is timestamp passed in the Date object
// Sun Dec 15 2024 16:42:19 GMT+0530 (India Standard Time)
console.log(myDate.getTime()) // this will return te time stamp in milliseconds

// have the timestamp of any particular date and time and use that
// and apply different methods on that to get date or anything you want
// like below
console.log(myDate.toLocaleString()) // 12/15/2024, 4:42:19 PM
console.log(myDate.toLocaleDateString()) //12/15/2024
console.log(myDate.getMinutes()) // 42
console.log(myDate.toString()) // this will be a string representation of the date 

//& simple way to return the current date and time
console.log(Date.now()) //& this will return the current timestamp in milliseconds 


//^ how to see the time before 1970?
// we can use the negative timestamp to see the time before 1970
const myDate1 = new Date(-12345678910111) // passing the timestamp in this will return the date and time
console.log(myDate1) // 1915

//^ how to check based on date of birth or to compare two dates (without time)
console.log(`===================================`)
const user1DOB = '02/04/2000'
const user2DOB = '03/06/1998'
// MM/DD/YYYY or YYYY/MM/DD Accepted
// DD-MM-YYYY or DD/MM/YYYY not accepted
const user3DOB = '2000-04-02T12:00:00.300Z' // passed in ISO string
// must be in valid ISO format
// ISO format is: YYYY-MM-DDTHH:MM:SS.MMMZ(or without Z), Z is for UTC time
const timeStampDate = new Date(23) // passed in timestamp
// const user2DOB = '03-06-1998'
const user1Date = new Date(user1DOB.split('/').reverse().join('/')) // to get in the indian format
const user2Date = new Date('03/06/1998')
// console.log({user1Date, user2Date})
console.log(user1Date)
console.log(user2Date)

//^ compare the two dates to see which user is older
const user1AgeOnMilliseconds = Date.now() - user1Date.getTime()
const user2AgeOnMilliseconds = Date.now() - user2Date.getTime()
console.log(user1AgeOnMilliseconds - user2AgeOnMilliseconds)
// -65491200000
// as the result is negative, user2 is older than user1

//^ compare two date of birth (with time)
const user3Date = new Date('2000-04-02T12:00:00.300Z')
console.log(user3Date.toLocaleString('en-GB'))
console.log(user3Date.toLocaleDateString('en-GB'))

const user4DOB = new Date(2000, 11, 12, 4, 30, 15)
// Tue Dec 12 2000 04:30:15 GMT+0530 (India Standard Time)
//? https://youtu.be/m5KnQQ-VXmQ?list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&t=8475
console.log(user4DOB)