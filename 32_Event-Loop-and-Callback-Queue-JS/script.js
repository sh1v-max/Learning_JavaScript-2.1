console.log(`Hi-1`);

function hello(){
    console.log(`Hello World`);
}

for (let i = 0; i <= 4; i++) {
    console.log(i);   
}
setTimeout(function(){
    console.log(`Hi-2`);
},2000);
setTimeout(function(){
    console.log(`Hi-3`);
},0);
hello();
console.log(`Hi-4`);
//     Hi-1
//     1
//     2
//     3
//     4
//     Hello World
//     Hi-4
//     Hi-3
//     Hi-2

/*
console.log(`Hi-1`);

function hello(){
    console.log(`Hello World`);
}

for (let i = 0; i <= 4000; i++) {
    console.log(i);   
}

console.log(`Hi-1`);

// hello();
// debugger
// setTimeout(function(){
//     console.log(`Hi-3`);
    
// },0);
*/