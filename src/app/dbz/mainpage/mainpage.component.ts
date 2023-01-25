import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegueta",
      poder: 7500
    }
  ]

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento)
  }

  constructor(private dbzServices: DbzService){}
}
