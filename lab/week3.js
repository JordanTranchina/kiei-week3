let numberOfProducts        // expects a Number ✅
let products                // expects an Array of product data✅
let promotion1Description   // expects a String describing the promotion ✅
let promotion2Description   // expects a String describing the promotion✅
let promotion3Description   // expects a String describing the promotion✅
let promotion1Icon          // expects a String (emoji)
let promotion2Icon          // expects a String (emoji)
let promotion3Icon          // expects a String (emoji)

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.
// Promotions should be displayed with a corresponding icon.
// - 🚛 for shipping
// - 🤑 for discount
// - 🎰 for contest

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript:
//   Math.floor(Math.random() * x)

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  console.log(database)
  numberOfProducts = database.products.length
  products = database.products

  // setting promotions
  promotion1 = database.promotions[Math.floor(Math.random() * database.promotions.length)]
  promotion2 = database.promotions[Math.floor(Math.random() * database.promotions.length)]
  promotion3 = database.promotions[Math.floor(Math.random() * database.promotions.length)]

  //setting promotion descriptions
  promotion1Description = promotion1.description
  promotion2Description = promotion2.description
  promotion3Description = promotion3.description

  //setting promotion descriptions


  //pairing icons with promotion types - Promotion 1
  if (promotion1.type == "shipping") {
    promotion1Icon = "🚛"

  } if (promotion1.type == "discount") {
    promotion1Icon = "🤑"

  } if (promotion1.type == "contest") {
    promotion1Icon = "🎰"
  }

  //pairing icons with promotion types - Promotion 2
  if (promotion2.type == "shipping") {
    promotion2Icon = "🚛"

  } if (promotion2.type == "discount") {
    promotion2Icon = "🤑"

  } if (promotion2.type == "contest") {
    promotion2Icon = "🎰"
  }

  //pairing icons with promotion types - Promotion 3
  if (promotion3.type == "shipping") {
    promotion3Icon = "🚛"

  } if (promotion3.type == "discount") {
    promotion3Icon = "🤑"

  } if (promotion3.type == "contest") {
    promotion3Icon = "🎰"
  }


  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}