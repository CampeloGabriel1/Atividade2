import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  showBanner: Boolean = true;

   constructor() { }

  MostrarOcultarBanner() {
    this.showBanner = !this.showBanner;
  }
}
