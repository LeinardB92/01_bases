import { Component } from '@angular/core';

interface personaje{
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  nuevo: personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  agregar(){
    console.log(this.nuevo);
  }
}
