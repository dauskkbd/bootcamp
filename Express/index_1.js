const exp = require("express");
const pet = require("./pet_store");
const app = exp();
const cors = require("cors");

app.use(exp.json());
app.use(cors());
const p = pet.pets;

app.get("/api/pets", (req, res) => {
  res.send(p);
});

app.get("/api/pets/:id", (req, res) => {
  let pet_search = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet_search = p[i];
      break;
    }
  }
  if (pet_search) {
    res.send(pet_search);
  } else {
    let error_message = "Pet not found!";
    res.status(404);
    res.send(error_message);
  }
});

app.get("/api/pets/list/species", (req, res) => {
  const animal_species = [];
  for (let i = 0; i < p.length; i++) {
    const current_species = p[i].species.toLowerCase();
    if (!animal_species.includes(current_species)) {
      animal_species.push(current_species);
    }
  }

  res.json(animal_species.map((species) => ({ species })));
});

app.listen(3001);
