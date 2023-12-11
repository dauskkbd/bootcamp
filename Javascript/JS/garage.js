function runActivity() {
  class Car {
    constructor(n, m, a) {
      this.name = n;
      this.manufacturer = m;
      this.acceleration = a;
      this.speed = 0;
      this.started = false;
    }

    start() {
      if (this.started == false) {
        this.speed = 30;
        this.started = true;
        console.log(this.name + " has started. Speed at " + this.speed);
      } else {
        console.log(this.name + " has already started");
      }
    }

    accelerate() {
      if (this.started) {
        this.speed = this.speed + this.acceleration;
        console.log(this.name + " has accelerated to speed " + this.speed);
      }
    }

    decelerate() {
      if (this.started) {
        if (this.speed > 1) {
          this.speed = Math.floor(this.speed / 2, 1);
          console.log(this.name + " has decelerated to speed at " + this.speed);
        } else {
          console.log("you can't decelerate lower than 1");
        }
      }
    }

    checkSpeed() {
      if (this.started) {
        console.log("You're current speed is " + this.speed);
      }
    }

    stop() {
      if (this.started) {
        this.started = false;
        console.log("You're car has stopped");
      } else {
        console.log(this.name + " has already stopped");
      }
    }
  }

  let name = prompt("Give me the car's name.");
  let manufacturer = prompt("Give me the car's manufacturer.");
  let acceleration = Number(prompt("What is your acceleration?"));
  let myCar = new Car(name, manufacturer, acceleration);
  myCar[1] = new Car(name, manufacturer, 30);

  let i = 0;
  while (i == 0) {
    let driver_choice = Number(
      prompt(
        "What would you like to do? (1)Start (2)Accelerate (3)Decelerate (4)Check speed (5)Stop"
      )
    );
    switch (driver_choice) {
      case 1:
        myCar.start();
        break;
      case 2:
        myCar.accelerate();
        break;
      case 3:
        myCar.decelerate();
        break;
      case 4:
        myCar.checkSpeed();
        break;
      case 5:
        myCar.stop();
        break;
    }
  }
}
