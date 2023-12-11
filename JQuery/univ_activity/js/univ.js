$(document).ready(function () {
  $("#studentButton").click(function () {
    let student_count_current = $("#student-count").text();
    let count_current = Number(student_count_current);
    count_current++;
    $("#student-count").text(count_current);
  });

  $(".subject-item").click(function () {
    $(this).toggleClass("subject-selected");
  });
});
