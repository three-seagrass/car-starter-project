// Import stylesheets
import './style.css';

// Car Class
class Car {
  speed: number;
  rego: string;
  maxSpeed: number = 120;

  constructor(_speed: number, _rego: string) {
    this.speed = _speed;
    this.rego = _rego;
  }

  increaseSpeed(spd: number): void {
    this.speed += spd;

    // This if statement ensures that the speed of the car doesn't go over the maxSpeed that we have set
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}

// Instantiate the 3 cars and add it to an array
const car1: Car = new Car(0, 'NQK490');
const car2: Car = new Car(10, 'QXZ573');
const car3: Car = new Car(20, 'TRJ650');
const carList: Car[] = [car1, car2, car3];
