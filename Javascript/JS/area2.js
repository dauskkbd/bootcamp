function runActivity() {
  let user_input;
  user_input = Number(
    prompt(
      "Select a shape you would like to get the area. 1. Triangle, 2. Circle, 3. Rectangle"
    )
  );

  if (user_input == 1) {
    base_measurement = Number(prompt("What is your base measurement?"));
    height_measurement = Number(prompt("What is your height measurement?"));
    triangle_answer = (base_measurement * height_measurement) / 2;
    console.log("The area of the triangle is " + triangle_answer);
  } else if (user_input == 2) {
    radius_measurement = Number(prompt("What is your radius?"));
    circle_answer = 3.1416 * radius_measurement ** 2;
    console.log("The area of the circle is " + circle_answer);
  } else if (user_input == 3) {
    length_measurement = Number(prompt("What is your length measurement?"));
    width_measurement = Number(prompt("What is your width measurement?"));
    rectangle_answer = length_measurement * width_measurement;
    console.log("The area of the rectangle is " + rectangle_answer);
  } else {
    alert("Error occured; invalid option. Please choose from 1, 2, and 3");
    console.error("ERROR: Invalid input; Please choose from 1, 2, and 3");
  }
}
