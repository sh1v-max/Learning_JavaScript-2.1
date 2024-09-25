console.log("While Loop");

// let i = 1
// while(i <= 100){
//     console.log(i);
//     i++
// }

const friends = ['sonic', 'viper', 'bheem', 'rise', 'wazir']
let i = 0
while (i<friends.length) {
    console.log(`${i + 1}. ${friends[i]}`);
    friends[i] = friends[i] + ' 2.0';
    i++
}

console.log("Program Ended");
