function runActivity() {
  let student_name;
  let student_old_grade;
  let student_new_grade;

  for (let i = 0; i < 3; i++) {
    student_name = prompt("Give me that student's name.");
    student_old_grade = Number(
      prompt("Give me the student's current grade level.")
    );
    if (student_old_grade >= 1 && student_old_grade <= 12) {
      student_new_grade = student_old_grade + 1;
      console.log(student_name + "is now enrolled in Anime University");
      console.log(
        "Old grade level: " +
          student_old_grade +
          "\nNew grade level: " +
          student_new_grade
      );
    }
  }
}
