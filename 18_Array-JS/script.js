const greet = ['hallo','hello','bonjour','annyonghaseyo']
const fruitsCollection = ['Apple','Banana','Grapes','Mango']
const num = [1, 2, 3, 4, 5]

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