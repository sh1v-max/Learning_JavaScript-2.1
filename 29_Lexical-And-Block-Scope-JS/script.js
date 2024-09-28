const username = 'wazir'       // Global scope
let userAge = 25              // Global scope
var a = 5                     // Global scope

function add() {
  const username = 'khan'     // Function scope
  const x = 5                // Function scope
  const y = 10               // Function scope
  console.log(x + y)
  console.log(username)
}

function sub() {
  const x = 5                // Function scope
  const y = 10               // Function scope
  const z = 10               // Function scope
  console.log(x - y)
  console.log(username)

  function child() {
    const k = 12             // Function scope
    const childName = 'khan' // Function scope
    console.log(childName)
    console.log(`My age is ${z}`)

    {
      const firstName = 'shiv'    // Block scope
      const secondName = 'singh'  // Block scope
      // var num2 = 100           // Global scope
      // num3 = 200               // Global scope
      const num = 101             // Block scope
      console.log(`full name is ${firstName} ${secondName}`);
      console.log(num)
    }
    // console.log(num2)
    // console.log(num3)

    function grandChild() {
      const grandChildName = 'ritik' // Function scope
      console.log(grandChildName)
      console.log(childName)
      console.log(username)
      console.log(k)
    }
    grandChild()
  }
  child()
}

sub()
console.log('Program Ended')
