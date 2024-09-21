const userAge = 25;
const isSchoolStudent = (userAge >= 5 && userAge <= 18);
const isCollegeStudent = (userAge >= 18 && userAge <= 25);
const isStudent = isSchoolStudent || isCollegeStudent;
console.log(isCollegeStudent); // Output: true
console.log(isStudent );

const andResult = 0 && 2
const orResult = 0 || 2
console.log(andResult);             //0
console.log(orResult);              //2

const andResult2 = '' && 'Hello'
console.log(andResult2);            // '' 
console.log(Boolean(andResult2));   //false

const orResult3 = '' || 'Hello'
console.log(orResult3);            //Hello
console.log(Boolean(orResult3));   //true

console.log('Hello' && undefined); // undefined
console.log('Hello' && null);      // null
console.log('Hello' || null);      // Hello
console.log('Hello' || undefined); // Hello
console.log(undefined || null);    // null
console.log(null || undefined);    // undefined

console.log('Hello' && 4+4);       // 8
console.log('Hello' && -4+4);      // 0
console.log(4+4 && 'Hello');       // Hello
console.log('Hello' || 4+4);       // Hello
console.log('Hello' || -4+4);      // Hello
console.log(4+4 || 'Hello');       // 8

console.log(Boolean('Hello' && 4+4));   // true
console.log(Boolean('Hello' && -4+4));  // false
console.log(Boolean(4+4 && 'Hello'));   // true
console.log(Boolean('Hello' || 4+4));   // true
console.log(Boolean('Hello' || -4+4));  // true
console.log(Boolean(4+4 || 'Hello'));   // true

const hello = console.log('Hello');    // Hello
console.log(hello);                    // undefined

const andResult4 = 'Hello' && console.log('Hello');    //Hello
const orResult4 = undefined || console.log('Hello');   //Hello
console.log(andResult4);           //undefined
console.log(orResult4);            //undefined 

