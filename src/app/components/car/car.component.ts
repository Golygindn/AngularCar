import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string [];
  isEdit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'A8';
    this.colors = {
      car: 'White',
      salon: 'Red',
      wheels: 'Carbon'
    };
    this.options = ['ABS', 'TractionControl', 'Carplay'];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOption(index: number): void {
    this.options.splice(index, 1);
  }

  carSelect(carName) {
    if (carName == 'BMW') {
      this.name = 'BMW';
      this.speed = 250;
      this.model = '325i';
      this.colors = {
        car: 'Gray',
        salon: 'Black',
        wheels: 'Silver'
      };
      this.options = ['ABS', 'TractionControl'];
    } else if (carName == 'Audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'A8';
      this.colors = {
        car: 'White',
        salon: 'Red',
        wheels: 'Carbon'
      };
      this.options = ['ABS', 'TractionControl', 'Carplay'];
    } else if (carName == 'MB') {
      this.name = 'Mercedes-Benz';
      this.speed = 250;
      this.model = 'E63 AMG';
      this.colors = {
        car: 'Black',
        salon: 'White',
        wheels: 'Black'
      };
      this.options = ['ABS', 'TractionControl', 'Carplay'];
    }
  }

}

interface Colors {
  car: string,
  salon: string,
  wheels: string
}
