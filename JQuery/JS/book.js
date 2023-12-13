$(document).ready(function () {
  let mode_of_darkness = false;
  $("#button-dark").click(function () {
    if (mode_of_darkness == false) {
      $("body")
        .css("background-color", "rgb(16, 16, 16)")
        .css("color", "white");
      mode_of_darkness = true;
    } else {
      $("body").css("background-color", "white").css("color", "black");
      mode_of_darkness = false;
    }
  });

  $("#button-zoom").click(function () {
    $("#cover-image").css("position", "absolute");
    $("#cover-image").animate(
      {
        width: "300px",
        left: "50%",
      },
      2000
    );
  });
  $("#button-zoomText").click(function () {
    let f_size = $("p").css("font-size").replace("px", "");
    f_size = Number(f_size);
    f_size++;
    $("p").css("font-size", f_size + "px");
  });
});
