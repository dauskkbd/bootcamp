$(document).ready(function () {
  let hunger = 100;
  let exercise = 100;
  let sleep = 100;

  function do_eat() {
    hunger += 100;
    sleep -= 5;
    update_bars();
    update_activity("Ate some food");
  }

  function do_exercise() {
    exercise += 100;
    sleep -= 10;
    update_bars();
    update_activity("Did some exercise");
  }

  function do_sleep() {
    sleep += 100;
    update_bars();
    update_activity("Had a nap");
  }

  function update_bars() {
    $("#hunger_bar").css("width", hunger + "%");
    $("#exercise_bar").css("width", exercise + "%");
    $("#sleep_bar").css("width", sleep + "%");
  }

  function passive_bar_decrease() {
    hunger = Math.max(0, hunger);
    exercise = Math.max(0, exercise);
    sleep = Math.max(0, sleep);
    hunger = Math.min(100, hunger);
    exercise = Math.min(100, exercise);
    sleep = Math.min(100, sleep);
  }

  function update_activity(message) {
    $("#last_activity").text(message);
  }

  setInterval(function () {
    update_bars();
    passive_bar_decrease();
  }, 500);

  setInterval(function () {
    hunger -= 1;
  }, 500);

  setInterval(function () {
    exercise -= 1;
  }, 1000);

  setInterval(function () {
    sleep -= 1;
  }, 2000);

  $("#zinogre_eat").click(function () {
    do_eat();
    update_activity(
      "Zinogre consumed food, you will feel it's thunderous wrath less"
    );
  });

  $("#zinogre_exercise").click(function () {
    do_exercise();
    update_activity(
      "The Thunder beast took a stretch, it starts with a good mood"
    );
  });

  $("#zinogre_sleep").click(function () {
    do_sleep();
    update_activity("Zinogre needed to recharge under the storm");
  });
});
