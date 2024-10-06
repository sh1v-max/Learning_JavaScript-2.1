function defParams(a, b = 2){
  param = `${a} ${b}`;
  return param;
}
console.log(defParams(1));                 // 1 2
console.log(defParams(1, 3));              // 1 3
console.log(defParams(1, undefined));      // 1 2
console.log(defParams(1, null));           // 1 null
console.log(defParams(1, ''));             // 1 ''
console.log(defParams(1, NaN));            // 1 NaN
console.log(defParams(1, false));          // 1 false
console.log(defParams(1, true));           // 1 true
console.log(defParams(1, {}));             // 1 {}
console.log(defParams(1, []));             // 1 []
console.log(defParams(1, function(){}));   // 1 function(){}


function rollDice(numberOfSides = 6){
  //if we want to check if the parameter is undefined
  // if(numberOfSides = undefined){
  //   numberOfSides = 6;
  // }
  return Math.floor(Math.random() * numberOfSides) + 1;
}
console.log(rollDice());                    // 1-6