import { Component } from '@angular/core';

interface Personaje{
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
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

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return
    }
    
    console.log(this.nuevo);

    this.personajes.push(this.nuevo)
    this.nuevo = {nombre:"", poder: 0}
  }

}