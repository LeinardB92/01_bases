import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainpageComponent } from './mainpage/mainpage.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [
    MainpageComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainpageComponent
  ]
})

export class DbzModule { }
