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

const carSelect: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('car-select')
);
const spdOutput: HTMLElement = document.getElementById('car-spd-output');
const spdChangeInput: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('new-spd-input')
);
const spdChangeBtn: HTMLElement = document.getElementById('new-spd-btn');

for (let i = 0; i < carList.length; i++) {
  carSelect.innerHTML += `<option value=${i}>${carList[i].rego}</option>`;
}

carSelect.addEventListener('change', handleCarChange);

function handleCarChange() {
  const selectedValue = carSelect.value;
  renderCarSpd(selectedValue);
}

spdChangeBtn.addEventListener('click', handleChangeSpd);

function handleChangeSpd() {
  const newSpdValue: number = Number(spdChangeInput.value);
  let selectedCarValue = carSelect.value;

  carList[selectedCarValue].speed = newSpdValue;
  renderCarSpd(selectedCarValue);
}

function renderCarSpd(carIndex) {
  spdOutput.innerHTML = `Speed: ${carList[carIndex].speed}`;
}
