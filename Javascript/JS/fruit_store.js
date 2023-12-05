function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];

  while (true) {
    fruit_name = prompt("What is the fruit's name?");
    fruit_price = Number(prompt("What is the fruit's price "));
    if (fruit_price < 0) {
      alert("You cannot place a value lower than 0");
      console.error("ERROR: Invalid number");
    } else {
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
    }

    let message = Number(
      prompt("Would you like to add another fruit? 0. Yes 1. No")
    );
    if (message == 1) {
      break;
    } else if (message == 0) {
      continue;
    }
  }

  for (let i = 0; i < fruit_names.length; i++) {
    console.log(
      i + 1 + ". " + fruit_names[i] + " | Price: PHP " + fruit_prices[i]
    );
  }
  // end section for fruit input

  // start section for fruit purchase
  let fruit_choices = [];
  let fruit_purchase;
  let fruit_total_amount;
  let fruit_total_price;

  while (true) {
    let fruit_choice = prompt(
      "What fruit would you like to buy? Press 0 to stop"
    );
    if (fruit_choice == 0) {
      break;
    } else if (fruit_choice != fruit_names) {
      alert("Check if you entered the correct fruit");
      console.error("ERROR: Fruit does not exist");
    } else {
      fruit_choices.push(fruit_choice);
    }

    let fruit_amount = Number(prompt("How many would you like to buy?"));
    if (fruit_amount < 0) {
      alert("Please place a number greater than 0");
      console.error("Error: Invalid amount!");
    } else {
      fruit_total_amount = fruit_amount;
    }

    for (let i = 0; i < fruit_choices.length; i++) {
      for (let j = 0; j < fruit_names.length; j++) {
        if (fruit_choices[i] == fruit_names[j]) {
          fruit_purchase = fruit_choices;
          fruit_total_price = fruit_prices[i] * fruit_total_amount;
        }
      }
    }
  }
  console.log(fruit_choices + "|" + "Total: PHP " + fruit_total_price);
}
