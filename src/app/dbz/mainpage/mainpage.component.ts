import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(){}
}
