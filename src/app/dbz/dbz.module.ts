import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainpageComponent } from './mainpage/mainpage.component';
import { PersonajesComponent } from './Components/personajes/personajes.component';
import { AgregarComponent } from './Components/agregar/agregar.component';

import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainpageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainpageComponent
  ],
  providers: [
    DbzService
  ]
})

export class DbzModule { }
