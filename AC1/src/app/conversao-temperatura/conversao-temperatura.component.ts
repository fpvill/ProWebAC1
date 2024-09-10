import { Component } from '@angular/core';

@Component({
  selector: 'app-conversao-temperatura',
  templateUrl: './conversao-temperatura.component.html',
  styleUrls: ['./conversao-temperatura.component.css']
})
export class ConversaoTemperaturaComponent {
  celsius: number = 0;
  fahrenheit: number | null = null;
  kelvin: number | null = null;

  converter() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
