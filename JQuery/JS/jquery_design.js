// $(document).ready(function () {
//   let current_color = $("#target_element").css("background-color");
//   alert("Current background color: " + current_color);

//   $("#change_color").click(function () {
//     $("#target_element").css("background-color", "blue");
//   });
// });

$(document).ready(function () {
  // Get and display the width and height of the target element
  let width = $("#target_element").width();
  let height = $("#target_element").height();
  $("#dimensions").text("Width: " + width + "px, Height: " + height + "px");

  // Change the width and height of the target element
  $("#target_element").width(200);
  $("#target_element").height(100);
});
