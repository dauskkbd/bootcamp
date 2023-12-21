const ex = require("express");
const ps = require("./pet_store");

const app = ex();
const p = ps.pets;

app.use(ex.json());

app.put("/api/pets", (req, res) => {
  let new_pet = {
    id: p.length,
    species: req.body.species,
    eating_habit: req.body.eating_habit,
    pet_name: req.body.pet_name,
  };
  console.log(new_pet);
  p.push(new_pet);
  res.send(new_pet);
});

app.put("/api/pets/:id", (req, res) => {
  let pet_search = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet_search = p[i];
      break;
    }
  }

  if (pet_search) {
    if (req.body.species) {
      pet_search.species = req.body.species;
    }

    if (req.body.eating_habit) {
      pet_search.eating_habit = req.body.eating_habit;
    }

    if (req.body.pet_name) {
      pet_search.pet_name = req.body.pet_name;
    }
    res.send(pet_search);
    console.log(pet_search);
  } else {
    let error_message = "Pet not found!";
    res.status(404);
    console.log(error_message);
    res.send(error_message);
  }
});

app.delete("/api/pets/:id", (req, res) => {
  let pet_search = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet_search = p[i];
      break;
    }
  }

  if (pet_search) {
    let index = p.indexOf(pet_search);
    console.log(pet_search);
    p[index] = {};
    res.send(pet_search);
  } else {
    let error_message = "Pet not found!";
    res.status(404);
    console.log(error_message);
    res.send(error_message);
  }
});

//main section
app.get("/api/pets", (req, res) => {
  res.send(p);
});

app.get("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }

  if (pet) {
    res.send(pet);
    console.log(pet);
  } else {
    let err = "Pet not found!";
    res.status(404);
    res.send(err);
    console.error(err);
  }
});

app.get("/api/pets/list/species", (req, res) => {
  let species = [];
  for (let i = 0; i < p.length; i++) {
    if (species.includes(p[i].species) == false) {
      species.push(p[i].species);
    }
  }

  res.send(species);
});

app.listen(3001);
console.log("Starting server...");
