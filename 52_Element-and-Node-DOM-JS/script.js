//*document.body.children
//output: HTMLCollection(2) [h1, script] 
//will return this on console and not on working with vscode 
//cuz document is the global object available in browser and not in nodejs

//*document.body.childNodes
//output: NodeList(7) [text, h1, text, comment, text, script, text]
//node also includes text, comment, etc. 
//here text also refers to new line(when we press enter) and space
