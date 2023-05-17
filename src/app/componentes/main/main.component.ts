import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ciudades = ['Santiago', 'Madrid', 'Buenos Aires', 'Bogotá', 'Lima'];
  showCiudad: boolean = true;
  changeCss: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar() {
    this.showCiudad = !this.showCiudad;
  }

  cambioCss() {
    this.changeCss = !this.changeCss;
  }
}
