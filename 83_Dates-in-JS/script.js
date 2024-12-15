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