import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ellie';
  price = 50;
  carPropertiesObject = { color: 'red', price: 100 };
  carLists = [
    { price: 10 },
    { price: 20 },
    { price: 30 },
    { price: 40 },
    { price: 50 },
    { price: 60 },
    { price: 70 },
  ];
  value = 11;
  show = true;
  color = 'blue';
  showCarListHandler = () => {
    alert('function worked');
  };
   onHoverHandler() {
    alert(`${this.price}`);
    console.log("hey")
    console.warn("warn")
  }

}
