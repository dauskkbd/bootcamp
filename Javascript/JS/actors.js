function runActivity() {
  let actors = [
    {
      //identifier
      first_name: "Xyriel", //property
      last_name: "Manabat",
      yeas_acting: 6,
      movies_list: ["Sisterakas", "Amarosa", "24/7 in love"],
    },

    {
      first_name: "Sue",
      last_name: "Ramirez",
      yeas_acting: 5,
      movies_list: ["Aswang", "Dead kids"],
    },
    {
      first_name: "Ogie",
      last_name: "Diaz",
      yeas_acting: 12,
      movies_list: ["Pare ko"],
    },
  ];

  console.log(actors[0].first_name);
  console.log(actors[1].last_name);
  console.log(actors[2].years_acting);
  console.log(actors[0].movies_list[0]);
  for (let i = 0; i < actors[0].movies_list.length; i++) {
    console.log(actors[0].movies_list[i]);
  }

  actors.push = {
    first_name: "Kim",
    last_name: "Domingo",
    yeas_acting: 4,
    movies_list: [],
  };

  for (let i = 0; i < actors.length; i++) {
    console.log(actors[i].first_name + " " + actors[i].last_name);
  }

  actors.push = {
    first_name: "Kim",
    last_name: "Domingo",
    yeas_acting: 4,
    movies_list: [],
  };
}
