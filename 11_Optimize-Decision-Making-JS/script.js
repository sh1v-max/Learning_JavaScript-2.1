// const username = "wazir";
// const userAge = 22;
const username = prompt("Enter your name") || ('wazir');
const userAge = parseInt(prompt("Enter your Age")) || (22);

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);
debugger
// if(true) console.log("Usr is working professional");
// if(false) console.log("Usr is working professional");
if(userAge>=5 && userAge <=17) {
    console.log(`${username} is school student`);
}

if(userAge>=18 && userAge <=24) {
    console.log(`${username} is college student`);
}

if(userAge>=25 && userAge <=35) {
    console.log(`${username} is working professional`);
}

if(userAge>=36 && userAge <=50) {
    console.log(`${username} is senior professional`);
}

if(userAge>=51) {
    console.log(`${username} is retired professional`);
}

console.log("end");
