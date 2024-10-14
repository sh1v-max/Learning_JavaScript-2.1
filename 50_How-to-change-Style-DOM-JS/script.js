document.querySelector('[hello]') //selecting the element with attribute hello
document.querySelector('[hello]').attributes.hello
// Output: Attr {name: "hello", value: "world"}
document.querySelector('[hello]').getAttribute('hello') //getting the value of hello attribute
// Output: "world"
document.querySelector('[hello]').getAttribute('class')// will return all the elements with class attribute
//and if no class attribute is present it will return null
document.querySelector('[hello]').setAttribute('hello', 'greet') //setting the value of hello attribute as greet
document.querySelector('[hello]').getAttribute('hello') //getting the value of hello attribute after setting it to greet
// Output: "greet"
//& adding another attribute to the element
document.querySelector('[hello]').setAttribute('say', 'bye')//setting another attribute say with value bye to the element
document.querySelector('h1').setAttribute('id','heading')
// setting an id with value heading to the h1 element
// Output: <h1 id="heading">Hello World</h1>

//* checking all the attributes of the element
document.querySelector('[hello]').attributes
//output: NamedNodeMap {0: class, 1: hello, 2: say, class: class, hello: hello, say: say, length: 3}

//* some common attributes can be accessed directly
//some common attributes are id, class, name, value, src, href etc
document.querySelector('[hello]').id
// Output: "heading"
document.querySelector('[hello]').id = 'newHeading'
//output: "newHeading"
//directly accessing the id attribute and changing its value to newHeading

//! using them don't actually change the values in the HTML file, it just changes the values in the DOM