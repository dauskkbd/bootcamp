function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];
  const fruit_stocks = [];

  function addItem() {
    let fruit_name = prompt("What is the name of the fruit?");
    let fruit_price = Number(prompt("What is the price of the fruit?"));

    if (fruit_price >= 0) {
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
      fruit_stocks.push(0);
      console.log(
        fruit_name +
          " added as items for sale. Each " +
          fruit_name +
          " sells for " +
          fruit_price +
          ". Stock set to 0."
      );
    } else {
      console.error("ERROR: Invalid price! Enter a positive value.");
    }
  }

  function restock() {
    let choice = prompt("What would you like to add stock to?");
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice) {
        fruit_found = true;
        let amount = Number(
          prompt("How many of " + choice + " would you like to add to stock?")
        );
        if (amount > 0) {
          fruit_stocks[i] += amount;
          console.log(
            amount +
              " stocks has been added to " +
              choice +
              ". New stock: " +
              fruit_stocks[i]
          );
          break;
        } else {
          console.error("ERROR: Invalid negative amount!");
        }
      }
    }

    if (fruit_found == false) {
      console.error("ERROR: Fruit not found!");
    }
  }

  function checkPrice() {
    let choice = prompt("What would you like to check the price of?");
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice) {
        fruit_found = true;
        let amount = Number(
          prompt(
            "How many of " + choice + " would you like to check the price of?"
          )
        );
        if (amount > 0) {
          let total_price = amount * fruit_prices[i];
          console.log(amount + " of " + choice + " is worth " + total_price);
          break;
        } else {
          console.error("ERROR: Invalid negative amount!");
        }
      }

      if (fruit_found == false) {
        console.error("ERROR: Fruit not found!");
      }
    }
  }

  function sell() {
    let choice_name = prompt("What would you like to buy?");
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice_name) {
        fruit_found = true;
        let amount = Number(
          prompt("How many " + choice_name + " would you like buy?")
        );
        if (amount > 0) {
          if (fruit_stocks[i] >= amount) {
            let total = amount * fruit_prices[i];
            fruit_stocks[i] -= amount;
            console.log(
              amount +
                " of " +
                choice_name +
                " sold for " +
                total +
                ". New stock: " +
                fruit_stocks[i]
            );
            break;
          } else {
            console.error("ERROR: Not enough stock!");
          }
        } else {
          console.error("ERROR: Can not have negative amount.");
        }
      }
    }

    if (fruit_found == false) {
      console.error("ERROR: Fruit was not found.");
    }
  }

  alert("Daiben's Fruit Store");
  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt("(1) Add new items (2) Restock (3) Check price (4) Sell (5) Stop")
    );
    switch (choice) {
      case 1:
        addItem();
        break;
      case 2:
        restock();
        break;
      case 3:
        checkPrice();
        break;
      case 4:
        sell();
        break;
      case 5:
        i = 1;
        break;
      default:
        console.error("ERROR: Enter one of the choices.");
    }
  }
}
