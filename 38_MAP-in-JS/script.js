console.log(`========== MAP ============`);

const months = ['January', 'February', 'March', 'April', 'May', 'December'];
/*
months.forEach((month) => {
  console.log(month);
})
    forEach does not return anything(its return type is undefined)
*/
months.map((month) => {
  // console.log(month);
})
/*output:
    January
    February
    March
    April
    May
    (5) [undefined, undefined, undefined, undefined, undefined]
    //? returns an array of 5 undefined values since map returns an array of the same length as the original array
    but its undefined because we are not returning anything from the callback function
*/

months.map((month) => {
  // console.log(month);
  return month;
})
/*output:
    January
    February
    March
    April
    May
    (5) ['January', 'February', 'March', 'April', 'May']
    //? returns an array of the same length as the original array
    and the returned array will be stored inside:
      months.map((month) => {
        console.log(month);
        return month;
      })
    we can store the array(returned) into a variable and use it later
      const returnedMonths = months.map((month) => {
        console.log(month);
        return month;
      })

    //! using map wont change the original array
*/

const returnedMonths = months.map((month) => {
  // console.log(month);
  return month;
})

//output: (5) ['January', 'February', 'March', 'April', 'May']

console.log(
  months.map((month) => {
    // console.log(month);
    return month;
}));

/*equivalent to:
console.log(
[
    "January",
    "February",
    "March",
    "April",
    "May"
]) 
*/

//&can also use multiple arguments in the callback function
const varMonths = months.map((month, index) => {
  // console.log(index, month);
  return month;
});
/*output:
    0 'January'
    1 'February'
    2 'March'
    3 'April'
    4 'May'
    //* (5) ['January', 'February', 'March', 'April', 'May']
*/
const varMonths2 = months.map((month, index, array) => {
  // console.log( month, index, array);   // prints the month, index and the array itself
  return month;
});

//difference in case of forEach
const varMonthsForEach = months.forEach((month, index) => {
  console.log(index, month); // prints the month and index
  return month;
});
/*output:
    0 'January'
    1 'February'
    2 'March'
    3 'April'
    4 'May'
    //* no return value
*/

console.log(`========== FILTER ============`);

const filterMonths = months.filter((month, index) => {
  // console.log(index+1, month);
  return index+1;
})

//filter will store the value returned from the callback function and those who fulfill the condition
const filterMonths0 = months.filter((month, index) => {
  // console.log(month.length <= 5); 
  return month.length <= 5; // returns the months with length less than or equal to 5
})
console.log(filterMonths0); //output: ["March", "April", "May"]

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });
//~ex 1
const filterMonthsM = months.filter((month, index) => {
  // console.log(month.length <= 5); 
  return month.charAt(0) === 'M'; // returns the months starting with 'M'
})
console.log(filterMonthsM); //output: ["March", "May"]

//~ex 2
const monthInclude = months.filter((month, index) => {
  // console.log(month.length <= 5); 
  return month.toLocaleLowerCase().includes("m"); // returns the months containing 'a'
  // toLocaleLowerCase() is used to convert the string to lowercase because includes is case sensitive
})  
console.log(monthInclude); //output: ["March", "May", "December"]

//~ex 3
const monthGreater3 = months.filter((month, index) => {
  return index >= 3; // returns the months with index greater than 3
})
console.log(monthGreater3); //output: ["April", "May", "December"]

//~ex 4 - with objects
// in this example we have an array of objects and 
// we want to filter out the objects with age greater than or equal to 30
// and in the second part we are using map to get the names of the filtered objects
const users = [
  {name: 'John', age: 34},
  {name: 'Amy', age: 20},
  {name: 'Camy', age: 25},
  {name: 'Sam', age: 40},
]
/*const userSenior = users.filter((user) =>{
    return user.age >= 30;
  })
  console.log(userSenior)
  const userName = userSenior.map((user) => {
    return user.name;
  })
  console.log(userName);
*/
//* or you can directly use map after filter
// Step 1: Filter the users who are 30 or older
const seniorUserName  = users.filter((user) => {
  // The filter function returns a new array with only users whose age is 30 or more
  return user.age >= 30;
}).map((user) => { // Step 2: Map over the filtered users to get only their names
// The map function creates a new array containing only the 'name' property of each filtered user
  return user.name;
})
// Step 3: Log the resulting array of names to the console
console.log(seniorUserName);
// Output: ['John', 'Sam']
//* its called chaining because we are chaining the map function after the filter function
