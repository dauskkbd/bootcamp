$(document).ready(function () {
  const menu_prices = {
    burger: 60,
    steak: 80,
    fries: 50,
    salad: 70,
    sprite: 25,
    icecream: 25,
  };
  const menu_names = {
    //up to you if you want to use
    burger: "Burger",
    steak: "Steak",
    fries: "Fries",
    salad: "Salad",
    sprite: "Sprite",
    icecream: "Ice Cream",
  };
  let total_price = 0;

  $("#food-order").submit(function (x) {
    x.preventDefault();

    let item_select = $("#food-select").val();
    let item_amount = Number($("#food-amount").val());
    const item_price = Number(menu_prices[item_select]);

    total_price += item_price * item_amount;

    add_item(menu_names[item_select], item_amount, item_price * item_amount);
    total_price_updated();
  });

  function add_item(item, amount, price) {
    const new_add_items = `
      <tr>
        <td>${item}</td>
        <td>${amount}</td>
        <td>₱${price}</td>
      </tr>
    `;
    $("#food-table-list").append(new_add_items);
  }
  function total_price_updated() {
    $("#food-table-total").text(total_price);
  }

  $("#get_all").change(function () {
    if ($(this).prop("checked")) {
      $(".sauce").prop("checked", true);
    } else {
      $(".sauce").prop("checked", false);
    }
  });
  $(".sauce").change(function () {
    if ($(this).prop("checked") !== true && $("#get_all").prop("checked")) {
      $("#get_all").prop("checked", false);
    }
  });
});
