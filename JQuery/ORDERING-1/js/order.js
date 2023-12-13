$(document).ready(function () {
  const menu_prices = {
    // object oriented, multiple variables with value placed inside one variable
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
    // id of <form> tag line 81
    let food_select = $("#food-select").val(); // id of <select> tag line 84
    let food_amount = $("#food-amount").val(); // id of <input> tag line 94
    let price = menu_prices[food_select] * Number(food_amount);
    total_price += price;
    let curr_table = $("#food-table-list").html(); //<tbody> tag line 114 , kaya may nakasingit ng tbody tag para jan mailagay yung  mga idadagdag na items... .HTML ang ginamit para maidagdag yung new items kasama sa existing items or mailagay yung new items sa ilalim ng table header
    let new_item =
      "<tr><td>" +
      menu_names[food_select] + // called the value of menu names using food select, same value na nasa loob nung menu prices
      "</td><td>" +
      food_amount +
      "</td><td>₱" +
      price +
      "</td></tr>";
    $("#food-table-list").html(curr_table + new_item); //
    $("#food-table-total").text(total_price);
    x.preventDefault();
  });

  $("#get_all").click(function () {
    // these codes make it so that if the checkbox with the id get_all is checked, all checkboxes with a class name .sauce will also be checked, otherwise if this is unchecked, all of them them will be unchecked
    if ($("#get_all").prop("checked")) {
      $(".sauce").prop("checked", true);
    } else {
      $(".sauce").prop("checked", false);
    }
  });

  $(".sauce").click(function () {
    // these codes make it so that if one of the checkboxes becomes ucnhecked while the the get_all checkbox is currently checked, then it will trigger the get_all checkbox t be unchecked
    if ($(this).prop("checked") == false) {
      $("#get_all").prop("checked", false);
    } else {
      // in this part, it states that if all of the checkboxes with the class name .sauce is checked while the get_all checkbox is not checked, then it will automatically check the get_all checkbox
      if ($(".sauce:checked").length === $(".sauce").length) {
        $("#get_all").prop("checked", true);
      }
    }
  });

  //use .prop("checked") to both get and set
});
