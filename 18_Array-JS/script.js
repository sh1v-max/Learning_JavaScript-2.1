const greet = ['hallo','hello','bonjour','annyonghaseyo']
const fruitsCollection = ['Apple','Banana','Grapes','Mango']
const num = [1, 2, 3, 4, 5]
const num2 = [11, 4, 3, 14, 5, 7, 1, 9 ]

console.log(greet[0]);               // hallo
console.log(fruitsCollection[0]);    // Apple

console.log(greet.length);            // 4
console.log(fruitsCollection.length); // 4

greet[0] = 'hola';
console.log(greet[0]);              // hola

greet.push('hola');
console.log(greet);      // ["hola", "hello", "bonjour", "annyonghaseyo", "hola"]

greet.pop();
console.log(greet);      // ["hola", "hello", "bonjour", "annyonghaseyo"]

greet.shift();
console.log(greet);      // ["hello", "bonjour", "annyonghaseyo"]

greet.unshift('Jambo');
console.log(greet);      // ["Jambo", "hello", "bonjour", "annyonghaseyo"]

const greetFruit = greet.concat(fruitsCollection);
const greetFruitNum = greet.concat(fruitsCollection, num);
console.log(greetFruit);       // ["Jambo", "hello", "bonjour", "annyonghaseyo", "Apple", "Banana", "Grapes", "Mango"]   
console.log(greetFruitNum);    // ["Jambo", "hello", "bonjour", "annyonghaseyo", "Apple", "Banana", "Grapes", "Mango", 1, 2, 3, 4, 5] 

console.log(greet.indexOf('hello'));        // 1
console.log(greet.indexOf('konnichiwa'));   // -1
console.log(greet.lastIndexOf('hello'));    // 1
console.log(greet.includes('hello'));       // true
console.log(greet.includes('konnichiwa'));  // false
console.log(greet.reverse());               // ["annyonghaseyo", "bonjour", "hello", "Jambo"] 

const arr1 = ['zod', 'killjoy', 'bell', 'normal', 'hash']
const arr2 = ['broke', 'rich', 'poor', 'sick', 'drama']
const arr3 = arr1.concat(arr2)
console.log(arr1.sort());                  // ["bell", "hash", "killjoy", "normal", "zod"]  
console.log(arr2.sort());                  // ["broke", "drama", "poor", "rich", "sick"]
console.log(arr3.sort());                  // ["bell", "broke", "drama", "hash", "killjoy", "normal", "poor", "rich", "sick", "zod"]

console.log(arr1);    //['bell', 'hash', 'killjoy', 'normal', 'zod']
console.log(arr2);    //['broke', 'drama', 'poor', 'rich', 'sick']
console.log(arr3);    //['bell', 'broke', 'drama', 'hash', 'killjoy', 'normal', 'poor', 'rich', 'sick', 'zod']
// console.log(arr1.slice(2));                // ["zod"]
console.log(arr1.slice(4));                // ["zod"]
console.log(arr1.slice(2, 4));             // ["killjoy", "normal"]
console.log(arr1.slice(1, 2));             // ["hash"]

console.log(arr1.splice(1, 2));                // ["zod"]
console.log(arr1);    //["bell", "hash", "normal"]
console.log(arr1.splice(1, 1,'bonjour'));    
console.log(arr1);    //["bell", "hash", "bonjour"