function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  let x = 5
  console.log(x)

  let y = 14
  console.log(y) //y is 14

  y = y + 1 //now y is 15
  console.log(y)

  let z = x + y //they sum to 20

  // let output = z //print it

  let quantity = 5 //Number
  let food = "tacos" //String
  let withSalsa = true //Boolean

  // let output = "i love " + food
  // output = "i would like " + quantity + " " + food
  output = `i would like ${quantity} ${food}`

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}