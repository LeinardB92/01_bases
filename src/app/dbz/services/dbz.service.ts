import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegueta",
          poder: 7500
        }
      ]

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    agregarPersonaje(nuevoPersonaje: Personaje){
        this._personajes.push(nuevoPersonaje);
    }
}