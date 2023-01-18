import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Chapulín colorado', 'Superman'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    // _.shift() elimina el primer elemento de un array y lo retorna.
    this.heroeBorrado = this.heroes.shift() || "";
  }

  
}
