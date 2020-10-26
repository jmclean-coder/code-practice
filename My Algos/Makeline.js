orders1 = [
  { number: 100, size: "lg", quantity: 2 },
  { number: 101, size: "sm", quantity: 4 },
  { number: 102, size: "md", quantity: 3 },
  { number: 103, size: "sm", quantity: 1 },
  { number: 104, size: "md", quantity: 1 },
  { number: 105, size: "lg", quantity: 1 },
  { number: 106, size: "lg", quantity: 2 },
  { number: 107, size: "sm", quantity: 4 },
  { number: 108, size: "lg", quantity: 3 },
  { number: 109, size: "md", quantity: 1 },
  { number: 110, size: "sm", quantity: 1 },
  { number: 111, size: "lg", quantity: 2 },
  { number: 112, size: "sm", quantity: 4 },
  { number: 113, size: "md", quantity: 3 },
  { number: 114, size: "lg", quantity: 3 },
  { number: 115, size: "md", quantity: 1 },
  { number: 116, size: "lg", quantity: 1 },
];

initialMakeLineWeights = {
  sauce: 200,
  cheese: 200,
  dough: 500,
};

function restock(ingredient) {
  return (ingredient += 200);
}

function percentage(current, initial) {
  return (current / initial) * 100;
}

function makeLineRestockBot(weights, orders) {
  // inputs: object of customer orders each with a size and quantity.

  // output:
  // object
  // How many pizzas have so far been made
  // The toppings that are below 50% of their initial weight when
  // any single topping is less than or equal to 20% the initial value
  recipes = {
    small: { dough: 17, cheese: 5.5, sauce: 3 },
    medium: { dough: 13, cheese: 8, sauce: 6 },
    large: { dough: 11, cheese: 11, sauce: 9 },
  };

  // steps:

  //create results object to return at end
  /*
  result = {
      needsRestocking: {
          cheese: true,
          sauce: true,
          dough: true
      },
      amounts: {
          cheese: #,
          sauce: #,
          dough: #
      },
      ordersMade: #,
      ordersLeft: #
  }
  */
  let result = {
    needsRestocking: {
      cheese: false,
      sauce: false,
      dough: false,
    },
  };

  //create variables for intial weights
  let initialSauce = weights.sauce;
  let initialCheese = weights.cheese;
  let initialDough = weights.dough;

  //create variable to save and update the current weight
  let currentWeights = Object.assign({}, weights);

  let targetRecipe;
  let ordersMade = 0;
  let ordersLeft = 0;
  // loop over orders array
  // -for each order-

  for (let i = 0; i <= orders.length; i++) {
    // target the recipe of the pizza depending on size

    switch (orders[i].size) {
      case "sm":
        targetRecipe = recipes.small;
      case "md":
        targetRecipe = recipes.medium;
      case "lg":
        targetRecipe = recipes.large;
      default:
        undefined;
    }
    // multiply the required ingredients amounts by the quantity of pizzas
    targetRecipe.dough = targetRecipe.dough * orders[i].quantity;
    targetRecipe.cheese = targetRecipe.cheese * orders[i].quantity;
    targetRecipe.sauce = targetRecipe.sauce * orders[i].quantity;
    // subtract the total from the current makeline
    currentWeights.dough -= targetRecipe.dough;
    currentWeights.sauce -= targetRecipe.sauce;
    currentWeights.cheese -= targetRecipe.cheese;
    ordersMade++;
    ordersLeft = orders.length--;

    // make variables to store percentages
    doughPercent = percentage(currentWeights.dough, initialDough);
    saucePercent = percentage(currentWeights.sauce, initialSauce);
    cheesePercent = percentage(currentWeights.cheese, initialCheese);

    // if the percent of the makeline ingredients is < 50, toggle true on that makeline ingredient
    if (!(doughPercent > 50)) {
      result.needsRestocking.dough = true;
    }
    if (!(saucePercent > 50)) {
      result.needsRestocking.sauce = true;
    }
    if (!(cheesePercent > 50)) {
      result.needsRestocking.cheese = true;
    }

    if (doughPercent <= 20 || cheesePercent <= 20 || saucePercent <= 20) {
      result.currentMakeline = currentWeights;
      console.log(result)
      return result;
    }
}
  // return:
  // the total number of orders completed
  // the number of orders remaining
  // the amount of the current make line
}

console.log(makeLineRestockBot(initialMakeLineWeights, orders1)
)
/*
inputs: object of customer orders each with a size, quantity, and type of pizza

output: object containing
How many pizzas have so far been made

The toppings that are below 50% of their initial weight when 
any single topping is less than or equal to 20% the initial value

data needed:
representation of the specific amount of ingredients required for each pizza
store weight of the initial ingredients
calculate the percent weight of the ingredients after a pizza has been "made"


steps:

loop over orders array

-for each order-

compare the current weight vs the initial weight by calculating the percent
if the percent of a makeline ingredient is less than or equal to 50 and greater than 20, add that ingredient it to tempResults
else if the percent of a makeline ingredient is greater than 50:

target the size of the pizza
multiply the required ingredients amounts by the quantity of pizzas
subtract the total from the current makeline
else

return:
the total number of orders completed
the number of orders remaining
the amount of the current make line


*/
