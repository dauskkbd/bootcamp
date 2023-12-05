function runActivity() {
  //   const movies_names = [
  //     "The Hows of Us",
  //     "She's Dating a Gangster",
  //     "Barcelona",
  //     "2 Good 2 Be True",
  //     "Crazy Beautiful You",
  //   ];
  //   movies_names[2] = "Barcelona: A love untold";
  //   movies_names.push("Can't Help Falling in Love");
  //   movies_names.push("Hello Love, Goodbye");
  //   //   movies_names.unshift("Can't Help Falling in Love");
  //   //   movies_names.pop();
  //   //   movies_names.shift();

  const movie_names = [];
  const movie_budgets = [];

  while (true) {
    let movie_name = prompt("What is the movie name?");
    let movie_budget = prompt("What is the movie budget?");

    movie_names.push(movie_name);
    movie_budgets.push(movie_budget);
    console.log("Added movie to database.");

    let choice = Number(
      prompt("Would you like to add another movie? 0. Yes, 1. No")
    );
    if (choice == 0) {
      console.log("Adding new movie...");
    } else if (choice == 1) {
      break;
    }
  }
  for (let i = 0; i < movie_names.length; i++) {
    console.log(
      i + 1 + ". " + movie_names[i] + " | Budget: " + movie_budgets[i]
    );
  }

 

  }
}
