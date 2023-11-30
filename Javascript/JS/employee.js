function runActivity() {
  let emmployee_name;
  let employee_dept_code;
  let department;
  let i = 0;

  do {
    emmployee_name = prompt("What is the employee name?");
    employee_dept_code = Number(
      prompt("What is the employee's department code? 1 - 3")
    );
    console.log("Saving employee data...");
    console.log("Welcome " + emmployee_name);
    switch (employee_dept_code) {
      case 1:
        department = "Human resources";
        break;
      case 2:
        department = "Marketing";
        break;
      case 3:
        department = "IT";
        break;
    }
    console.log("This employee is in the " + department + " department");
    choice = Number(
      prompt("Would you like to add another employee? 0. Yes, 1. No")
    );
    if (choice == 0) {
      console.log("Adding new employee...");
    } else if (choice == 1) {
      console.log("Shutting program...");
      break;
    }
  } while (i == 0);
}
