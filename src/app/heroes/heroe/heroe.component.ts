import { Component } from "@angular/core";

@Component({
    //app, es para indicar que será parte de una aplicación personalizada
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre}, ${this.edad}`;
        //su equivalente sería:
        //return this.nombre + ', ' + this.edad.toString;
    }

    cambiarNombre(): void{
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(): void {
        this.edad = 25
    }
}