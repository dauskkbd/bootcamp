function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];
  const fruit_stocks = [];

  function addItem() {
    let fruit_name = prompt("What is the name of the fruit?");
    let fruit_price = Number(prompt("What is the price of the fruit?"));
    let fruit_stock = Number(
      prompt("How many items do you want to put in stock?")
    );

    if (fruit_price >= 0) {
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
      fruit_stocks.push(fruit_stock);
      console.log(
        fruit_name +
          " added as item for sale. Each " +
          fruit_name +
          " sells for " +
          fruit_price +
          " || Stock: " +
          fruit_stock
      );
    } else {
      console.error("ERROR: Invalid price! Enter a positive value.");
    }
  }

  function restock() {
    let stock_choice = prompt("What would you like to add stock to?");
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == stock_choice) {
        fruit_found = true;
        let added_stock = Number(
          prompt("How many would you like to add to " + stock_choice + "?")
        );
        if (added_stock >= 0) {
          let updated_stock = added_stock + fruit_stocks[i];
          console.log(
            stock_choice +
              " has been added to " +
              fruit_names +
              ". New stock: " +
              updated_stock
          );
        }
      }
    }
  }

  function checkPrice() {
    let priceCheck_choice = prompt(
      "What would you like to check the price of?"
    );
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == priceCheck_choice) {
        fruit_found = true;
        let priceCheck_total = Number(
          prompt("Enter a number to check it's total price")
        );
        priceCheck_total = fruit_prices[i] * priceCheck_total;
        console.log(
          fruit_prices +
            "/pc " +
            "of " +
            fruit_names +
            "is worth " +
            fruit_prices * priceCheck_total
        );
      }
    }
  }

  function sell() {
    let sell_fruit_choice = prompt("What would you like to buy?");
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == sell_fruit_choice) {
        fruit_found = true;
        let sell_fruit_amount = Number(
          prompt("How many " + sell_fruit_choice + " would you like buy?")
        );
        if (sell_fruit_amount > fruit_stocks) {
          console.error(
            "ERROR! You have exceeded the maximum amount of items in stock!"
          );
        } else if (sell_fruit_amount <= fruit_stocks) {
          let sell_fruit_total = sell_fruit_amount * fruit_prices[i];
          console.log("Total price: PHP " + sell_fruit_total);
          console.log(
            "UPDATED || Fruit name: " +
              fruit_names +
              " || Price: PHP " +
              fruit_prices +
              "/pc" +
              " || Stock: " +
              (fruit_stocks - sell_fruit_amount)
          );
        } else {
          console.error("ERROR: Can not have negative amount.");
        }
      }
    } //you have to make it so that you don't sell if not enough stock
    //you also have to make it so that stocks are deducted when you buy fruit
    //you also have to display how much the fruit was sold for as well as remaining stock
    //you have to do validation

    if (fruit_found == false) {
      console.error("ERROR: Fruit was not found.");
    }
  }

  alert("Kenneth's Store of Fruits");
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
