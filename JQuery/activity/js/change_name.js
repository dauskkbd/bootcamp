function changeName() {
  let user_NewName = prompt("What is your name?");
  document.getElementById("userName").innerHTML = user_NewName;
  document.getElementById("userName2").innerHTML = user_NewName;
}
