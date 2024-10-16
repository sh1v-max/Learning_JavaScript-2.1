//*document.body.children
//output: HTMLCollection(2) [h1, script] 
//will return this on console and not on working with vscode 
//cuz document is the global object available in browser and not in nodejs

//*document.body.childNodes
//output: NodeList(7) [text, h1, text, comment, text, script, text]
//node also includes text, comment, etc. 
//here text also refers to new line(when we press enter) and space
//every element is a node but not every node is an element
//and every node has a value of 1 to 11

//we can access the nodes using index
document.body.childNodes[2] //output: "Hello World"
//though it looks like text but it is a node object
document.body.childNodes[2].nodeType //output: 3
//nodeType 3 refers to text node
document.body.childNodes[2].nodeValue //output: "Hello World" - accessing value
document.body.childNodes[2].nodeValue = "Namaste World"
//output: Namaste World - changing the value

//! these all will only work on browser console and not on vscode