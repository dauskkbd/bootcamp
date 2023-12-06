function runActivity() {
  class Dog {
    constructor(n, a, b) {
      this.name = n;
      this.age = a;
      this.breed = b;
    }

    bark() {
      return this.name + ": woo! woo woo OOooo!";
    }

    rename(n) {
      this.name = n;
    }

    set_age(a) {
      console.log(this.name + "'s age is now " + a);
      if (a >= 0) {
        this.age = a;
      }
    }
  }

  class PoliceDog extends Dog {
    constructor(n, a, b, yos) {
      super(n, a, b);
      this.years_of_service = yos;
    }
    bark() {
      return this.name + ": GRR arf arf";
    }
  }

  let dogs = [];

  dogs[0] = new Dog("Hachiko", 2, "husky");
  console.log(dogs[0].bark());
  dogs[0].age = 3;
  dogs[0].rename("Pancho");
  console.log(
    "Hello! My name is " +
      dogs[0].name +
      " and I'm " +
      dogs[0].age +
      " years old."
  );

  dogs[1] = new Dog("Bogart", 4, "corgi");
  dogs[1].set_age(5);
  console.log(dogs[1].bark());

  dogs[2] = new PoliceDog("Race", 5, "American Bully", 5);
  console.log("Hello! My name is " + dogs[2].name + " and I'm a Police dog");
  console.log("I have served for " + dogs[2].years_of_service + " years");
  console.log(dogs[2].bark());
}
